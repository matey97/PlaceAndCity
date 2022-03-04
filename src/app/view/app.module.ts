import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MapModule } from "./map/map.module";
import { LeafletDrawModule } from "@asymmetrik/ngx-leaflet-draw";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { InformationPanelModule } from "./information-panel/information-panel.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      LeafletModule,
      LeafletDrawModule,
      MapModule,
      BrowserAnimationsModule,
      FormsModule,
      InformationPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
