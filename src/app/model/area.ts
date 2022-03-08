export interface DrawnArea {
  id: number,
  geojson: any,
}

export interface AreaAnswers {
  name: string,
  freeText: string,
  questions: [{string: number}]
}

export interface InterestArea {
  area: DrawnArea,
  answers: AreaAnswers
}

export interface AreaChange {
  change: Change
  area: DrawnArea
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
