import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksTimesComponent } from './works-times.component';

describe('WorksTimesComponent', () => {
  let component: WorksTimesComponent;
  let fixture: ComponentFixture<WorksTimesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorksTimesComponent]
    });
    fixture = TestBed.createComponent(WorksTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
