import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExpensesService } from '../expenses.service';
import { IExpense } from '../IExpense';

@Component({
  selector: 'app-expenses-home',
  templateUrl: './expenses-home.component.html',
  styleUrls: ['./expenses-home.component.css']
})
export class ExpensesHomeComponent {

  search = new FormControl();

  title = 'app';
  person = 'everybody';
  searchValue: string;
  get expenses() {
    return this.service.getExpenses();
  }

  constructor(private service: ExpensesService) {
  }
  addExpense(expense: IExpense) {
    this.service.addExpense(expense).subscribe();
  }

  deleteExpense(expense: IExpense) {
    this.service.deleteExpense(expense);
  }
}
