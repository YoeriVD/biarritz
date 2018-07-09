import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IExpense } from './expenses/IExpense';
import { ExpensesService } from './expenses/expenses.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  search = new FormControl();

  title = 'app';
  person = 'everybody';
  searchValue: string;
  get expenses(){
    return this.service.getExpenses();
  }

  constructor(private service: ExpensesService) {
  }
  addExpense(expense: IExpense) {
    this.service.addExpense(expense);
  }

  deleteExpense(expense: IExpense) {
    this.service.deleteExpense(expense);
  }
}