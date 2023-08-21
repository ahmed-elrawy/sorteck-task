import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityOfResourceComponent } from './availability-of-resource.component';

describe('AvailabilityOfResourceComponent', () => {
  let component: AvailabilityOfResourceComponent;
  let fixture: ComponentFixture<AvailabilityOfResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailabilityOfResourceComponent]
    });
    fixture = TestBed.createComponent(AvailabilityOfResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
