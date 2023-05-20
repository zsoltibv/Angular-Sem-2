import { TestBed } from '@angular/core/testing';

import { TableOperationsService } from './table-operations.service';

describe('TableOperationsService', () => {
  let service: TableOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
