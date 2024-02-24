import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductivityPageComponent } from './productivity-page.component';

describe('ProductivityPageComponent', () => {
  let component: ProductivityPageComponent;
  let fixture: ComponentFixture<ProductivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductivityPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
