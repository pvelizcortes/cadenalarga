import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadenaLargaService } from '../cadena-larga.service';
import { ArrayListComponent } from '../shared/array-list/array-list.component';

@Component({
  selector: 'app-manual-input',
  templateUrl: './manual-input.component.html',
  styleUrls: ['./manual-input.component.css']
})
export class ManualInputComponent implements OnInit {
  
  formMaster: FormGroup;
  inputArray = [];
  @ViewChild(ArrayListComponent) arrayList : ArrayListComponent;

  constructor(private formBuilder: FormBuilder, public service: CadenaLargaService) { 
    this.formMaster = this.formBuilder.group({
      textInput: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  processText() {    
    this.inputArray = this.service.transformToArray(this.formMaster.value.textInput);    
    this.arrayList.cleanAll();
  }


}
