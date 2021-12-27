# Cadena Larga

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width="100" height="100">
</p>

Cadena larga es un ejercicio que recorre una matriz bidimensional de caracteres 
buscando de manera recursiva los caracteres continuos que más se repitan.

Frameworks empleados.
* Angular
* Bootstrap

Conceptos aplicados en este ejercicio.
* Arrays
* Recursividad

# Demo Online (FireBase)
Para probar la aplicación online haga click aquí:
<a href="https://emerioschallenge.web.app"> <b>Demo Cadena Larga</b> </a>

# Uso
Para correr la aplicación:

*  Instalar las dependencias del proyecto: `$ npm install`
*  Correr la aplicación: `$ ng serve -o`
*  Las instrucciones estarán en el mismo sitio Web.

# Algoritmos

* Algoritmo que recorre el Array.

```js
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
      console.log(`Error: ${ex}`);
    }
  }
```

* Algoritmo Recursivo.

```js
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

```
