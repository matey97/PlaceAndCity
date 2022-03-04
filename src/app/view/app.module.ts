import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MapModule } from "./map/map.module";
import { LeafletDrawModule } from "@asymmetrik/ngx-leaflet-draw";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { AreaInformationComponent } from '../area/area-information/area-information.component';
import { InformationPanelComponent } from './information-panel/information-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaInformationComponent,
    InformationPanelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LeafletModule,
        LeafletDrawModule,
        MapModule,
        BrowserAnimationsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
