import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from "./map-view/map-view.component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { LeafletDrawModule } from "@asymmetrik/ngx-leaflet-draw";

@NgModule({
  declarations: [
    MapViewComponent,
  ],
  exports: [
    MapViewComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    LeafletDrawModule
  ]
})
export class MapModule { }
