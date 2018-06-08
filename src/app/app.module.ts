import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JobberComponent } from './jobber/jobber.component';
import { EnduserComponent } from './jobber/enduser/enduser.component';

@NgModule({
  declarations: [
    AppComponent,
    JobberComponent,
    EnduserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
