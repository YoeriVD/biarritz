import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CoolDirectivesModule } from '../cool-directives/cool-directives.module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, CoolDirectivesModule
  ],
  declarations: [ExpenseListComponent, ExpenseFormComponent],
  exports: [ExpenseListComponent, ExpenseFormComponent]
  //providers: [ExpensesService]
})
export class ExpensesModule { }
