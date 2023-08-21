import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { MainLayoutComponent } from '../../@shared/componenets/main-layout/main-layout.component';

const children: Routes = [
  {
    path: '',
    component:ResourcesComponent,
    title: "resources"
  },
];

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResoursesRoutingModule { }
