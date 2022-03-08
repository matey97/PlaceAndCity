import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapModule } from "./map/map.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { InformationPanelModule } from "./information-panel/information-panel.module";
import { ServicesModule } from "../services/services.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      MapModule,
      BrowserAnimationsModule,
      FormsModule,
      InformationPanelModule,
      ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
