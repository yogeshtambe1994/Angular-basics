import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../employee.service';

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
    <h2>{{'Hello ' + name4}}</h2>
    <button (click)="fireEvent()">Send Event</button><br>
    <h2>{{ name3 | uppercase }}</h2>
    <h2>{{ 0.25 | currency: 'INR' }}</h2>
    <h2>Employee List</h2>
    <h2>{{employees}}</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}} {{employee.name}} {{employee.age}}</li>
    </ul>
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
  @Input('parentData') public name4;
  @Output() public childEvent = new EventEmitter();
  public name3 = 'Code Evolution';
  public employees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
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

  fireEvent() {
    this.childEvent.emit('Hey angular');
  }
}
