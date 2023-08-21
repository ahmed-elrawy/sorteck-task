import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewResourseComponent } from './add-new-resourse.component';

describe('AddNewResourseComponent', () => {
  let component: AddNewResourseComponent;
  let fixture: ComponentFixture<AddNewResourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewResourseComponent]
    });
    fixture = TestBed.createComponent(AddNewResourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
