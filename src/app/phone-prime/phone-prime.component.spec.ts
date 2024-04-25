import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePrimeComponent } from './phone-prime.component';

describe('PhonePrimeComponent', () => {
  let component: PhonePrimeComponent;
  let fixture: ComponentFixture<PhonePrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonePrimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonePrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
