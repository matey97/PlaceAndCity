import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Control,
  ControlPosition,
  DrawEvents,
  featureGroup,
  FeatureGroup,
  GeoJSON,
  latLng, latLngBounds,
  Layer,
  Map as LeafletMap,
  tileLayer
} from "leaflet";
import { getDrawLocal, getDrawOptions } from "./map-configuration";
import { AreaChange, buildAreaChange, Change, InterestArea } from "../../../model/area";

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

  drawnAreasLayers: Layer[] = [];
  private _drawnAreas = new Map<string, Layer>();
  @Input() set drawnAreas(interestAreas: InterestArea[]) {
    interestAreas
      .forEach(area => this._drawnAreas.set(
        area.id,
        GeoJSON.geometryToLayer(area.area.geojson).bindPopup(area.answers.name)
      )
    );

    this.drawnAreasLayers = Array.from(this._drawnAreas.values());
    this.drawnItems.clearLayers();
    this.areaAlreadyDrawn = false;

    this.setInitialViewPort();
  }

  @Input() set focusedArea(interestArea: InterestArea) {
    if (!interestArea) {
      this.resetViewPort();
      return;
    }

    const layer = this._drawnAreas.get(interestArea.id);
    if (!layer) return;

    this.zoomOnLayerAreaAndOpenPopup(layer);
  }

  @Output() areaChange = new EventEmitter<AreaChange>();

  private map!: LeafletMap;
  options: any;

  drawnItems: FeatureGroup = featureGroup();
  drawOptionsFull: Control.DrawConstructorOptions;
  drawOptionsEdit: Control.DrawConstructorOptions;
  drawLocal: any;
  areaAlreadyDrawn: boolean = false;

  constructor() {
    this.options = {
      layers: [
        tileLayer(DEFAULT_TILE, { maxZoom: 18 })
      ],
      zoom: this.mapZoom,
      center: this.mapCenter
    };

    this.drawnItems = featureGroup();
    this.drawOptionsFull = this.getDrawingOptions(true);
    this.drawOptionsEdit = this.getDrawingOptions(false);
    this.drawLocal = getDrawLocal();
  }

  onMapReady(map: LeafletMap) {
    this.map = map;
  }

  onDrawCreated(e: DrawEvents.Created) {
    this.drawnItems.addLayer(e.layer);
    this.map.fitBounds(this.drawnItems.getBounds());
    this.emitEventForChange([e.layer], Change.ADD);
    this.areaAlreadyDrawn = true;
  }

  onDrawEdited(e: DrawEvents.Edited) {
    this.emitEventForChange(e.layers.getLayers(), Change.MODIFY);
  }

  onDrawDeleted(e: DrawEvents.Deleted) {
    this.emitEventForChange(e.layers.getLayers(), Change.DELETE);
    this.areaAlreadyDrawn = false;
  }

  private setInitialViewPort() {
    if (this.map !== undefined) {
      this.map.setView(this.mapCenter, this.mapZoom);
    }
  }

  private zoomOnLayerAreaAndOpenPopup(layer: Layer) {
    const untypedLayer = layer as any;

    if (!untypedLayer.editing)
      return;

    if (!untypedLayer.editing.latlngs)
      return;

    this.map.fitBounds(latLngBounds(untypedLayer.editing.latlngs[0]));
    if (layer.getPopup()) layer.openPopup();
  }

  private resetViewPort() {
    this.setInitialViewPort();
    this.drawnAreasLayers
      .filter(layer => layer.isPopupOpen())
      .map(layer => layer.closePopup());
  }

  private getDrawingOptions(drawEnabled: boolean) {
    return getDrawOptions(this.drawnItems, {
      drawingMode: drawEnabled,
      position: this.position,
      polygonColor: this.polygonColor
    })
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

