import { Control, ControlPosition, FeatureGroup } from "leaflet";

export interface DrawOptionsConfiguration {
  position: ControlPosition,
  polygonColor: string,
}

export function getDrawOptions(drawnItems: FeatureGroup, config: DrawOptionsConfiguration): Control.DrawConstructorOptions {
  return {
    position: config.position,
    draw: {
      polygon: {
        allowIntersection: false,
        drawError: {
          color: '#e1004f',
          message: '<strong>Ups!<strong> you can\'t draw that!'
        },
        shapeOptions: {
          color: config.polygonColor
        }
      },
      polyline: false,
      circle: false,
      rectangle: false,
      marker: false,
      circlemarker: false
    },
    edit: {
      featureGroup: drawnItems
    }
  }
}

export function getDrawLocal() {
  return {
    draw: {
      toolbar: {
        buttons: {
          polygon: "Draw an area of interest"
        }
      },
      handlers: {
        polygon: {
          tooltip: {
            start: "Click to start drawing an area.",
            cont: "Click to continue drawing the area.",
            end: "Click first point to close this area."
          }
        }
      }
    },
    edit: {
      toolbar: {
        actions: {
          clearAll: {
            title: "Clear all areas",
          }
        },
        buttons: {
          edit: "Edit areas",
          editDisabled: "No areas to edit",
          remove: "Delete areas",
          removeDisabled: "No areas to delete"
        }
      },
      handlers: {
        edit: {
          tooltip: {
            "text": "Drag handles or markers to edit areas.",
            "subtext": "Click cancel to undo changes."
          }
        },
        remove: {
          tooltip: {
            text: "Click on an area to remove."
          }
        }
      }
    }
  }
}
