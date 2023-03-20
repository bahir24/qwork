import {Component, OnDestroy, OnInit} from '@angular/core';
import {IEmployee} from "../../../models/employee";
import {EmployeesService} from "../../../services/employees/employees.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  private unsubscribeNotifier = new Subject<void>();
  public employees!: IEmployee[];

  private setEmployees(employees: IEmployee[]) {
    this.employees = employees;
  }

  constructor(private readonly employeesService: EmployeesService) {
  }

  ngOnInit(): void {
    this.employeesService.getEmployees().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe(((employees: IEmployee[]) => this.setEmployees(employees)));
  }

  ngOnDestroy() {
    this.unsubscribeNotifier.next();
    this.unsubscribeNotifier.complete();
  }
}
