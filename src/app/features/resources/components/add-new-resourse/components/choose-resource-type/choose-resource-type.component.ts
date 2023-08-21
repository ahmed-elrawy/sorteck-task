import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-choose-resource-type',
  templateUrl: './choose-resource-type.component.html',
  styleUrls: ['./choose-resource-type.component.scss']
})
export class ChooseResourceTypeComponent {
  @Input() resourceTypeControl!: FormControl;

}
