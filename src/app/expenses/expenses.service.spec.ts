import { TestBed, inject } from '@angular/core/testing';

import { ExpensesService } from './expenses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ExpensesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpensesService]
    });
  });

  it('should be created', inject([ExpensesService], (service: ExpensesService) => {
    expect(service).toBeTruthy();
  }));
});
