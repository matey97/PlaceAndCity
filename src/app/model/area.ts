export interface Area {
  id: number,
  geojson: any,
}

export interface AreaChange {
  change: Change
  area: Area
}

export enum Change {
  ADD, MODIFY, DELETE
}

export function buildAreaChange(change: Change, id: number, geojson: any): AreaChange {
  return {
    change: change,
    area: {
      id: id,
      geojson: geojson,
    }
  }
}
