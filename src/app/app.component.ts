import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IExpense } from './IExpense';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = new FormControl();

  title = 'app';
  person = 'everybody';
  searchValue: string;
  expenses: IExpense[] = [
    { description: 'Ticket to Biarritz', amount: 545.45, date: new Date(2018, 6, 28) },
    { description: 'Taxi from Bilbao to Biarritz', amount: 250.05, date: new Date(2018, 7, 16) },
    { description: 'Bottle of fien wine', amount: 45.90, date: new Date(2018, 7, 17) },
  ]
  addExpense(expense: IExpense) {
    this.expenses.push(expense);
  }

  deleteExpense(expense: IExpense) {
    expense.hidden = true;
  }
}