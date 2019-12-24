import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You have selected department with id = {{departmentId}}</h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()">Previous</button>
    <button (click)="goNext()">Next</button>
    </p>
    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId }])
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
