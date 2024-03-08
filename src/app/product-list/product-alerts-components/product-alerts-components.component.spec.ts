import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertsComponentsComponent } from './product-alerts-components.component';

describe('ProductAlertsComponentsComponent', () => {
  let component: ProductAlertsComponentsComponent;
  let fixture: ComponentFixture<ProductAlertsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAlertsComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAlertsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
