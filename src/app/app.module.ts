import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobberComponent } from './jobber/jobber.component';
import { EnduserComponent } from './enduser/enduser.component';
import { ServicesListComponent } from './enduser/services-list/services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobberComponent,
    EnduserComponent,
    ServicesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
