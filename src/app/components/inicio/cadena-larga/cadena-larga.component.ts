import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadenaLargaService } from './cadena-larga.service';

@Component({
  selector: 'app-cadena-larga',
  templateUrl: './cadena-larga.component.html',
  styleUrls: ['./cadena-larga.component.css']
})
export class CadenaLargaComponent implements OnInit { 
  selectedOption = 'seleccione';
  constructor(public service: CadenaLargaService,   private router: Router,) {  
  }

  ngOnInit(): void {
  }

  onChange(event:string){  
    this.selectedOption = event;
    this.router.navigate([`inicio/cadenalarga/${event}`]);
  }
}
