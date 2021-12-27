import { Component, Input, OnInit } from '@angular/core';
import { CadenaLargaService } from '../../cadena-larga.service';

@Component({
  selector: 'app-array-list',
  templateUrl: './array-list.component.html',
  styleUrls: ['./array-list.component.css']
})
export class ArrayListComponent implements OnInit {

  @Input() masterArray = [];
  /* Array de los 8 movimientos posibles (sentido del reloj) */
  arrayOfMovements = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];

  rowLength: number = 0;
  colLength: number = 0;
  maxCount: number = 0;

  searchingChar: string = ''; // Caracter que se está buscando
  maxCharFound: string = '';  

  constructor(public service: CadenaLargaService) {
  }

  ngOnInit(): void {
  }

  processArray() {
    try {
      this.cleanAll();
      this.rowLength = (this.masterArray.length);
      this.colLength = (this.masterArray[0].length);

      for (let row = 0; row < this.rowLength; row++) {
        for (let col = 0; col < this.colLength; col++) {
          this.searchingChar = this.masterArray[row][col];
          this.arrayOfMovements.forEach(mov => { // recorrer los 8 movimientos posibles.
            let contador = this.moveTo((row + mov[0]), (col + mov[1]), mov[0], mov[1], 1);
            if (contador > this.maxCount) {
              this.maxCount = contador;
              this.maxCharFound = this.searchingChar;
            }
          });
        }
      }      
    }
    catch (ex) {
      console.log(`Error: ${ex}`);
    }
  }

  /*
   * Funcion recursiva
   */
  moveTo(row, col, addRow, addCol, contador) {
    if ((row > (this.rowLength - 1) || row < 0) || (col > (this.colLength - 1) || col < 0)) // verificar que no salga de los limites.
      return contador;
    if (this.searchingChar == this.masterArray[row][col]) {
      contador++;
      return this.moveTo((row + addRow), (col + addCol), addRow, addCol, contador);
    }
    return contador;
  }

  cleanAll() {
    this.maxCount = 0;
    this.maxCharFound = '';
  }

  get charToShow() {
    var _char = '';
    for (let index = 0; index < this.maxCount; index++) {
      _char += _char == '' ? this.maxCharFound : `, ${this.maxCharFound}`;
    }
    return _char;
  }
}