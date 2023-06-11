import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./main.html`,
})
export class App {
  name = 'MyApp';
  n: number = 10;
  numbers: number[];

  constructor(){
    this.update();
    this.numbers =[];
  }

  update(){
    this.numbers = [];
    for(let i=1; i<=this.n; i++){
      let r = Math.trunc(100 * Math.random());
      this.numbers.push(r);
    }
  }
}

bootstrapApplication(App);
