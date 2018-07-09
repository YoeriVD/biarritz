import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesHomeComponent } from './expenses-home/expenses-home.component';

const routes: Routes = [
  { path: '', component: ExpensesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
