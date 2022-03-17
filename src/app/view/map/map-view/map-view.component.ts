import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Control,
  ControlPosition,
  DrawEvents,
  featureGroup,
  FeatureGroup,
  GeoJSON,
  GeometryUtil,
  latLng, latLngBounds,
  Layer,
  Map as LeafletMap,
  tileLayer
} from "leaflet";
import { getDrawLocal, getDrawOptions } from "./map-configuration";
import { InterestArea } from "../../interest-area";
import { buildAreaChange, Change, DrawnAreaChange } from "./drawn-area";

const CASTELLON = latLng(39.986324,-0.040872)
const DEFAULT_TILE = 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
const M2INKM2 = 1000000;

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

  @Output() areaChange = new EventEmitter<DrawnAreaChange>();

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
        tileLayer(DEFAULT_TILE, { maxZoom: 18, attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors' })
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
    if (this.isDrawnAreaTooBig(e.layer)) {
      // TODO: warn user about area too big
      return;
    }

    this.drawnItems.addLayer(e.layer);
    this.map.fitBounds(this.drawnItems.getBounds());
    this.emitEventForChange([e.layer], Change.ADD);
    this.areaAlreadyDrawn = true;
  }

  onDrawEdited(e: DrawEvents.Edited) {
    if (this.isDrawnAreaTooBig(e.layers.getLayers()[0])) {
      // TODO: warn user about area too big
      return;
    }
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

    this.map.fitBounds(latLngBounds(untypedLayer.getLatLngs()[0]));
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

  private isDrawnAreaTooBig(layer: any): boolean {
    // TODO: add threshold
    console.log(GeometryUtil.geodesicArea(layer.getLatLngs()[0]) / M2INKM2);
    return false;
  }

  private emitEventForChange(layers: any[], changeType: Change) {
    layers.forEach(layer => {
      const areaChange = this.toAreaChange(layer, changeType);
      this.areaChange.emit(areaChange);
    })
  }

  private toAreaChange(layer: any, changeType: Change): DrawnAreaChange {
    const areaId = this.drawnItems.getLayerId(layer);
    return buildAreaChange(changeType, areaId, layer.toGeoJSON());
  }
}

