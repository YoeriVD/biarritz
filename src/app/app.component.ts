import { Component } from '@angular/core';
import { IExpense } from './IExpense';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = new FormControl();
  expenseForm = new FormGroup({
    amount: new FormControl(15.99, [Validators.required]),
    description: new FormControl('this is a dummy'),
    date: new FormControl('2018-02-14')
  });
  title = 'app';
  person = 'everybody';
  searchValue: string;
  expenses: IExpense[] = [
    { description: 'Ticket to Biarritz', amount: 545.45, date: new Date(2018, 6, 28) },
    { description: 'Taxi from Bilbao to Biarritz', amount: 250.05, date: new Date(2018, 7, 16) },
    { description: 'Bottle of fien wine', amount: 45.90, date: new Date(2018, 7, 17) },
  ]
  addExpense() {
    if (!this.expenseForm.invalid)
      this.expenses.push(this.expenseForm.value);
  }

  deleteExpense(expense: IExpense) {
    expense.hidden = true;
  }
}