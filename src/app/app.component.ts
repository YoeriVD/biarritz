import { Component } from '@angular/core';
import { IExpense } from './IExpense';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active = false;
  search = new FormControl();
  expenseForm = new FormGroup({
    amount: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl('2018-02-14', [Validators.required])
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

  toggleAddExpense() {
    this.active = !this.active;
  }

  deleteExpense(expense: IExpense) {
    expense.hidden = true;
  }
}