import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseResourceTypeComponent } from './choose-resource-type.component';

describe('ChooseResourceTypeComponent', () => {
  let component: ChooseResourceTypeComponent;
  let fixture: ComponentFixture<ChooseResourceTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseResourceTypeComponent]
    });
    fixture = TestBed.createComponent(ChooseResourceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
