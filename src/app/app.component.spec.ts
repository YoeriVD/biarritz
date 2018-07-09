import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoolPipesModule } from './cool-pipes/cool-pipes.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpensesService, ExpensesServiceMock } from './expenses/expenses.service';
import { IExpense } from './expenses/IExpense';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, ExpensesModule, ReactiveFormsModule, CoolPipesModule, HttpClientTestingModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [{ provide: ExpensesService, useClass: ExpensesServiceMock }],
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
    }));

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('should get the expenses', async(() => {
        const service : ExpensesService = TestBed.get(ExpensesService);
        spyOn(service, 'getExpenses').and.callThrough();
        let dummy : IExpense[];
        fixture.componentInstance.expenses.subscribe(d => dummy = d);
        expect(service.getExpenses).toHaveBeenCalledTimes(1);
        expect(dummy.length).toBe(2);
    }));
});
