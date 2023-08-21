import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-availability-of-resource',
  templateUrl: './availability-of-resource.component.html',
  styleUrls: ['./availability-of-resource.component.scss'],
})
export class AvailabilityOfResourceComponent implements OnInit {
  @Input() parentForm!: Record<
    | 'availabilityOfResources'
    | 'multipleBooking'
    | 'name'
    | 'resourceTime'
    | 'resourceType',
    FormControl
  >;

  ngOnInit(): void {
    console.log(this.parentForm);
  }
}
