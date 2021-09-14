import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayinitiatedComponent } from './payinitiated.component';

describe('PayinitiatedComponent', () => {
  let component: PayinitiatedComponent;
  let fixture: ComponentFixture<PayinitiatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayinitiatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayinitiatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
