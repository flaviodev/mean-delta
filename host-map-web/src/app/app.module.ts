import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FdSearchBarComponent } from './fd-search-bar/fd-search-bar.component';
import {HttpClientService} from "./http-client.service";
import { HostPanelComponent } from './host-panel/host-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FdSearchBarComponent,
    HostPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
