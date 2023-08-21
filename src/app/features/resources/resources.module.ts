import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { ResoursesRoutingModule } from './resourses-routing.module';
import { AddNewResourseComponent } from './components/add-new-resourse/add-new-resourse.component';
import { ChooseServiceComponent } from './components/choose-service/choose-service.component';
import { WorksTimesComponent } from './components/works-times/works-times.component';
import { ResourceNameComponent } from './components/add-new-resourse/components/resource-name/resource-name.component';
import { ChooseResourceTypeComponent } from './components/add-new-resourse/components/choose-resource-type/choose-resource-type.component';
import { AvailabilityOfResourceComponent } from './components/add-new-resourse/components/availability-of-resource/availability-of-resource.component';
import { SharedModule } from '@app/@shared/shared.module';



@NgModule({
  declarations: [
    ResourcesComponent,
    AddNewResourseComponent,
    ChooseServiceComponent,
    WorksTimesComponent,
    ResourceNameComponent,
    ChooseResourceTypeComponent,
    AvailabilityOfResourceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResoursesRoutingModule
  ]
})
export class ResourcesModule { }
