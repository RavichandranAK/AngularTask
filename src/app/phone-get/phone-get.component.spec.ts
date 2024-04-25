import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneGetComponent } from './phone-get.component';

describe('PhoneGetComponent', () => {
  let component: PhoneGetComponent;
  let fixture: ComponentFixture<PhoneGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneGetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
