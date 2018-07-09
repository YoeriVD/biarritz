import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ExpensesService, ExpensesServiceMock } from './expenses/expenses.service';
import { ExpensesModule } from './expenses/expenses.module';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { CoolPipesModule } from './cool-pipes/cool-pipes.module';
describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule, ExpensesModule, ReactiveFormsModule, CoolPipesModule
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
    it('should get the expenses', () => {
        const service : ExpensesService = TestBed.get(ExpensesService);
        spyOn(service, 'getExpenses').and.callThrough();
        const dummy = fixture.componentInstance.expenses;
        expect(service.getExpenses).toHaveBeenCalledTimes(1);
        expect(dummy.length).toBe(2);
    });
});
