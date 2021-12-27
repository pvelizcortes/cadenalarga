import { Component, OnInit, ViewChild } from '@angular/core';
import { CadenaLargaService } from '../cadena-larga.service';
import { HttpClient } from '@angular/common/http';
import { ArrayListComponent } from '../shared/array-list/array-list.component';

@Component({
  selector: 'app-process-file',
  templateUrl: './process-file.component.html',
  styleUrls: ['./process-file.component.css']
})
export class ProcessFileComponent implements OnInit {
  fileArray = [];
  file: any;
  fileName: string = "";
  @ViewChild(ArrayListComponent) arrayList : ArrayListComponent;
  
  constructor(public service: CadenaLargaService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  processFile(e) {
    this.file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.fileArray = this.service.transformToArray(fileReader.result.toString());
      this.fileName = this.file.name;
      this.arrayList.cleanAll();
    }    
    fileReader.readAsText(this.file);
  }

  testFile(name: string) {
    this.fileName = `/assets/testingFiles/test${name}`;
    this.http.get(this.fileName, { responseType: 'text' }).subscribe(data => {
      this.fileArray = this.service.transformToArray(data);;
      this.arrayList.cleanAll();    })
  }

}
