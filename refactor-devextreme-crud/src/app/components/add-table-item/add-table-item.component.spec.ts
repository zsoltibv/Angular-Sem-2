import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTableItemComponent } from './add-table-item.component';

describe('AddTableItemComponent', () => {
  let component: AddTableItemComponent;
  let fixture: ComponentFixture<AddTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
