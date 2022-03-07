import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Control,
  ControlPosition,
  DrawEvents,
  featureGroup,
  FeatureGroup,
  GeoJSON,
  latLng,
  Layer,
  Map,
  tileLayer
} from "leaflet";
import { getDrawLocal, getDrawOptions } from "./map-configuration";
import { Area, AreaChange, buildAreaChange, Change } from "../../../model/area";

const CASTELLON = latLng(39.986324,-0.040872)
const DEFAULT_TILE = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {

  @Input() mapCenter = CASTELLON;
  @Input() mapZoom = 13;

  @Input() position: ControlPosition = "topleft";
  @Input() polygonColor: string = '#f16232';

  @Input() drawEnabled: boolean = false;

  _drawnAreas!: Layer[];
  @Input() set drawnAreas(areas: Area[]) {
    this._drawnAreas = areas
      .map(area => GeoJSON.geometryToLayer(area.geojson).bindPopup(area.name))
    this.drawnItems.clearLayers();

    if (this.map !== undefined) {
      this.map.setView(this.mapCenter, this.mapZoom);
    }
  }

  @Output() areaChange = new EventEmitter<AreaChange>();

  private map!: Map

  options: any;
  drawnItems: FeatureGroup = featureGroup();
  drawOptions: Control.DrawConstructorOptions;
  drawLocal: any;

  constructor() {
    this.options = {
      layers: [
        tileLayer(DEFAULT_TILE, { maxZoom: 18 })
      ],
      zoom: this.mapZoom,
      center: this.mapCenter
    };

    this.drawnItems = featureGroup();
    this.drawOptions = getDrawOptions(this.drawnItems, {
      position: this.position,
      polygonColor: this.polygonColor
    });
    this.drawLocal = getDrawLocal();
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  onDrawCreated(e: DrawEvents.Created) {
    this.drawnItems.addLayer(e.layer);
    this.map.fitBounds(this.drawnItems.getBounds());
    this.emitEventForChange([e.layer], Change.ADD);
  }

  onDrawEdited(e: DrawEvents.Edited) {
    this.emitEventForChange(e.layers.getLayers(), Change.MODIFY);
  }

  onDrawDeleted(e: DrawEvents.Deleted) {
    this.emitEventForChange(e.layers.getLayers(), Change.DELETE);
  }

  private emitEventForChange(layers: any[], changeType: Change) {
    layers.forEach(layer => {
      const areaChange = this.toAreaChange(layer, changeType);
      this.areaChange.emit(areaChange);
    })
  }

  private toAreaChange(layer: any, changeType: Change): AreaChange {
    const areaId = this.drawnItems.getLayerId(layer);
    return buildAreaChange(changeType, areaId, layer.toGeoJSON());
  }
}

