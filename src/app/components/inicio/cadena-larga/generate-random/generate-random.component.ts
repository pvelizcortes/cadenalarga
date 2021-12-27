import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadenaLargaService } from '../cadena-larga.service';
import { ArrayListComponent } from '../shared/array-list/array-list.component';

@Component({
  selector: 'app-generate-random',
  templateUrl: './generate-random.component.html',
  styleUrls: ['./generate-random.component.css']
})
export class GenerateRandomComponent implements OnInit {

  formMaster: FormGroup;
  randomArray = [];
  @ViewChild(ArrayListComponent) arrayList : ArrayListComponent;

  constructor(private formBuilder: FormBuilder, public service: CadenaLargaService) {
    this.formMaster = this.formBuilder.group({
      textEjeX: ['', [Validators.required, Validators.min(4), Validators.max(20),  Validators.pattern("^[0-9]*$")]],
      textEjeY: ['', [Validators.required, Validators.min(4), Validators.max(20),  Validators.pattern("^[0-9]*$")]]
    });
   }

  ngOnInit(): void {
  } 

  onSubmit() {
    this.randomArray = [];
    let ejeX = Number.parseInt(this.formMaster.value.textEjeX);
    let ejeY = Number.parseInt(this.formMaster.value.textEjeY);

    this.randomArray = this.service.generateRandomText(ejeX, ejeY);
    this.arrayList.cleanAll();
  }

}
