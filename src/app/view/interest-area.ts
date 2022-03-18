import { v4 as uuid } from "uuid";
import { DrawnArea } from "./map/map-view/drawn-area";
import { AreaAnswers } from "./information-panel/area-questions/answers";

export interface InterestArea {
  id: string,
  area: DrawnArea,
  answers: AreaAnswers,
}

export function buildInterestArea(area: DrawnArea, answers: AreaAnswers) {
  return {
    id: uuid(),
    area: area,
    answers: answers,
  };
}
