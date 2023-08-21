import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-resource-name',
  templateUrl: './resource-name.component.html',
  styleUrls: ['./resource-name.component.scss']
})
export class ResourceNameComponent {
  @Input() nameControl!: FormControl;

}
