import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*----------------------   Imports  ----------------------*/
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/*----------------------   PIPES   ----------------------*/
import * as Shared from './index';
import {RouterModule} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {  } from '@angular/common';  


@NgModule({
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule
  ],
  declarations: [
    ...Shared.pipes,
    ...Shared.components,
    
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,

    FormsModule,
    TranslateModule,
    ...Shared.pipes,
    ...Shared.components
  ]
})
export class SharedModule {
}