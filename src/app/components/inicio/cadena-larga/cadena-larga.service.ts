import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadenaLargaService {

  constructor() { }

  generateRandomText(ejeX: number, ejeY: number) {
    var arr = [];
    for (var i = 0; i < ejeX; i++) {
      arr[i] = [];
      for (var j = 0; j < ejeY; j++) {
        arr[i][j] = this.randomCharacter();
      }
    }
    return arr;
  }

  transformToArray(text: string) {
      var arr1 = text.split("\n");
      var arr2 = [];
      for (var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i].split(",").map(x => { return x.trim() });
      }
      return arr2;  
  }

  randomCharacter() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
  } 
}
