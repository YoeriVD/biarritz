import { Injectable } from '@angular/core';
import { IExpense } from './IExpense';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  expenses: IExpense[] = [
    { description: 'Ticket to Biarritz', amount: 545.45, date: new Date(2018, 6, 28) },
    { description: 'Taxi from Bilbao to Biarritz', amount: 250.05, date: new Date(2018, 7, 16) },
    { description: 'Bottle of fien wine', amount: 45.90, date: new Date(2018, 7, 17) },
  ]
  constructor() { }

  getExpenses = () => this.expenses;

  addExpense = (expense: IExpense) => this.expenses.push(expense);
  
  deleteExpense = (expense: IExpense) => expense.hidden = true;
}

export class ExpensesServiceMock {

  expenses: IExpense[] = [
    { description: 'Dummy1', amount: 545.45, date: new Date(2018, 6, 28) },
    { description: 'Dummy2', amount: 250.05, date: new Date(2018, 7, 16) },
  ]
  constructor() { }

  getExpenses = () => this.expenses;

  addExpense = (expense: IExpense) => this.expenses.push(expense);
  
  deleteExpense = (expense: IExpense) => expense.hidden = true;
}

