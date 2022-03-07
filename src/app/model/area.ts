export interface Area {
  id: number,
  name: string,
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
      name: "",
      geojson: geojson,
    }
  }
}
