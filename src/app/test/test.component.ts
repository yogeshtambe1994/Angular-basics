import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 [style.color]="'orange'">
      Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2 class="text-success">{{"String " + "Concatenation"}}</h2>
    <h2>{{"Length of name is:" + name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2 class="text-danger">{{greetUser()}}</h2>
    <input type="text" value="Yogesh">
    <button (click)="onClick()">Submit</button><br>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log</button><br>
    <input [(ngModel)]="name" type="text">
    {{name2}}
    <h2>Structural Directives</h2>
    <h2 *ngIf="true">
      True from ngIF
    </h2>

    <div [ngSwitch]="color2">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
    </div>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Yogesh';
  public name2 = '';
  public color2 = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('Welcome to angular')
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  logMessage(value) {
    console.log(value);
  }
}
