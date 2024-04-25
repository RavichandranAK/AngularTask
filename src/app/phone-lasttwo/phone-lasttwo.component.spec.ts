import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLasttwoComponent } from './phone-lasttwo.component';

describe('PhoneLasttwoComponent', () => {
  let component: PhoneLasttwoComponent;
  let fixture: ComponentFixture<PhoneLasttwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneLasttwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneLasttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
