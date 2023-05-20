import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableItemComponent } from './edit-table-item.component';

describe('EditTableItemComponent', () => {
  let component: EditTableItemComponent;
  let fixture: ComponentFixture<EditTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
