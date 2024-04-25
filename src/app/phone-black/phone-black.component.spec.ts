import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBlackComponent } from './phone-black.component';

describe('PhoneBlackComponent', () => {
  let component: PhoneBlackComponent;
  let fixture: ComponentFixture<PhoneBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
