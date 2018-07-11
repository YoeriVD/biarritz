import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoolDirectivesModule } from '../cool-directives/cool-directives.module';
import { CoolPipesModule } from '../cool-pipes/cool-pipes.module';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpensesHomeComponent } from './expenses-home/expenses-home.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesService, ExpensesServiceMock } from './expenses.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SdUiModule } from '@sdworx/sd-components';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, CoolDirectivesModule, CoolPipesModule, HttpClientModule, ExpensesRoutingModule,
    SdUiModule, NgbModule
  ],
  declarations: [ExpenseListComponent, ExpenseFormComponent, ExpensesHomeComponent],
  exports: [ExpensesHomeComponent],
  providers: [{provide: ExpensesService, useClass: ExpensesServiceMock}]
})
export class ExpensesModule { }
