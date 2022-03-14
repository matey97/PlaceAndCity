export interface DrawnArea {
  id: number,
  geojson: any,
}

export enum Change {
  ADD, MODIFY, DELETE
}

export interface DrawnAreaChange {
  change: Change
  area: DrawnArea
}

export function buildAreaChange(change: Change, id: number, geojson: any): DrawnAreaChange {
  return {
    change: change,
    area: {
      id: id,
      geojson: geojson,
    }
  }
}
