import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ExpensesModule } from './expenses.module';
import { IExpense } from './IExpense';

@Injectable({
  providedIn: ExpensesModule
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  private readonly api = 'http://localhost:9999/expenses';
  private expenses$ = this.http
  .get<IExpense[]>(this.api)
    .pipe(shareReplay(1))

  getExpenses = () => {
    return this.expenses$;
  };

  addExpense = (expense: IExpense) => this.http.put(this.api, expense);

  deleteExpense = (expense: IExpense) => expense.hidden = true;
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

