import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  processCode :string = '';
  recursiveCode: string = '';
  

  constructor() {
    this.processCode = `  
    /* Array de los 8 movimientos posibles (sentido del reloj) */
    arrayOfMovements = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
    
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
        console.log(ex);
      }
    }`;

    this.recursiveCode = `  
    moveTo(row, col, addRow, addCol, contador) {
      if ((row > (this.rowLength - 1) || row < 0) || (col > (this.colLength - 1) || col < 0))
        return contador;
      if (this.searchingChar == this.masterArray[row][col]) {
        contador++;
        return this.moveTo((row + addRow), (col + addCol), addRow, addCol, contador);
      }
      return contador;
    }`;
  }

  ngOnInit(): void {
  }

}
