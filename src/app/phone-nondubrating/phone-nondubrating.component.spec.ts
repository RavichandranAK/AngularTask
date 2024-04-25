import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNondubratingComponent } from './phone-nondubrating.component';

describe('PhoneNondubratingComponent', () => {
  let component: PhoneNondubratingComponent;
  let fixture: ComponentFixture<PhoneNondubratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneNondubratingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneNondubratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
