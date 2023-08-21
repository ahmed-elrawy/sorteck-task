import { Component,inject,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ResourcestService } from '@app/@core/services/resources.service';

@Component({
  selector: 'app-add-new-resourse',
  templateUrl: './add-new-resourse.component.html',
  styleUrls: ['./add-new-resourse.component.scss']
})
export class AddNewResourseComponent implements OnInit {
  protected resourceService = inject(ResourcestService);
  protected fb = inject(FormBuilder);

  resourceForm!: FormGroup;


  ngOnInit() {
    this.createInitialResourceForm();
  }

  createInitialResourceForm(){
    this.resourceForm = this.fb.group({
      name: [''],
      resourceType:[''],
      availabilityOfResources:[''],
      resourceTime:[''],
      multipleBooking: ['']
    });
  }
  get nameControl(): FormControl {
    return this.resourceForm?.get('name') as FormControl;
  }

  get resourceTypeControl(): FormControl {
    return this.resourceForm?.get('resourceType') as FormControl;
  }
  get availabilityOfResourcesControl(): FormControl {
    return this.resourceForm?.get('availabilityOfResources') as FormControl;
  }

  get resourceTimeControl(): FormControl {
    return this.resourceForm?.get('resourceTime') as FormControl;
  }
  get multipleBookingControl(): FormControl {
    return this.resourceForm?.get('multipleBooking') as FormControl;
  }
  get formControls():any {
    return {
      nameControl: this.nameControl,
      resourceTypeControl: this.resourceTypeControl,
      availabilityOfResourcesControl: this.availabilityOfResourcesControl,
      resourceTimeControl: this.resourceTimeControl,
      multipleBookingteControl: this.multipleBookingControl,
   
    };
  }

  submitResourceForm(){
    console.log(this.resourceForm.value)
  }
}
