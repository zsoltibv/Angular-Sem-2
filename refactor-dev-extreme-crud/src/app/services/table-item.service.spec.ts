import { TestBed } from '@angular/core/testing';

import { TableItemService } from './table-item.service';

describe('TableItemService', () => {
  let service: TableItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
