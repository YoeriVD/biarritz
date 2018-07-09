import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { IExpense } from './IExpense';

@Injectable()
export class ExpensesService {

  constructor(private http: HttpClient) { }

  private readonly api = 'http://localhost:9999/expenses';
  private expenses$ = this.getExpenses$()

  getExpenses = () => {
    return this.expenses$;
  };

  addExpense = (expense: IExpense) => {
    return this.http
    .post(this.api, expense)
    .pipe(tap(_ => this.expenses$ = this.getExpenses$()));
  };

  deleteExpense = (expense: IExpense) => expense.hidden = true;

  private getExpenses$() {
    return this.http
      .get<IExpense[]>(this.api)
      .pipe(shareReplay(1));
  }
}

export class ExpensesServiceMock {

  expenses: IExpense[] = [
    { description: 'Ticket to Biarritz', amount: 545.45, date: new Date(2018, 6, 28) },
    { description: 'Taxi from Bilbao to Biarritz', amount: 250.05, date: new Date(2018, 7, 16) },
  ]
  constructor() { }

  getExpenses = () => of(this.expenses);

  addExpense = (expense: IExpense) => { this.expenses.push(expense); return of(expense) };

  deleteExpense = (expense: IExpense) => expense.hidden = true;
}

