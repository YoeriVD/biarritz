import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule'},
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
