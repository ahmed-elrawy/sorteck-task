import { NgModule, Optional, SkipSelf } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app/@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule, 

  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}


