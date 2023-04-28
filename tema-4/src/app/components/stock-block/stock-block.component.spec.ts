import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBlockComponent } from './stock-block.component';

describe('StockBlockComponent', () => {
  let component: StockBlockComponent;
  let fixture: ComponentFixture<StockBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
