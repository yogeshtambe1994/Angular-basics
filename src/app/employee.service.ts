import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {'id': 1, 'name': 'Amit', 'age': 25},
      {'id': 2, 'name': 'Akash', 'age': 21},
      {'id': 3, 'name': 'Ajit', 'age': 22},
      {'id': 4, 'name': 'Sujit', 'age': 24}
    ];
  }
}
