import {AreaAnswers} from "../../view/information-panel/area-questions/answers";
import {InterestArea} from "../../view/interest-area";

export interface Command {
  coordinates: { [key: number]: number[] }
  answers: AreaAnswers,
  data: { [key: string]: boolean },
  status: CommandStatus
}

export enum CommandStatus {
  SUBMITTED, COMPLETED
}

export function fromInterestArea(interestArea: InterestArea) {
  return {
    coordinates: { ...interestArea.area.geojson.geometry.coordinates[0] },
    answers: interestArea.answers,
    data: {
      centroid: true
    },
    status: CommandStatus.SUBMITTED
  };
}
