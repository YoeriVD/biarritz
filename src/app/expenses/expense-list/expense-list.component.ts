import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IExpense } from '../IExpense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  @Input() list: IExpense[];
  @Output() deleteExpense = new EventEmitter<IExpense>();
  constructor() { }

  ngOnInit() {
  }
  deleteExp(expense: IExpense) {
    this.deleteExpense.emit(expense);
  }
}
