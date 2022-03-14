import { InterestArea, Facet } from "../../view/interest-area";

export interface Command {
  facetsExtracted: { [key: Facet]: boolean },
  status: CommandStatus
}

export enum CommandStatus {
  SUBMITTED, COMPLETED
}

export function fromInterestArea(interestArea: InterestArea): Command {
  return {
    facetsExtracted: Object.fromEntries(interestArea.facetsOfInterest.map((facet) => [facet, false])),
    status: CommandStatus.SUBMITTED
  };
}
