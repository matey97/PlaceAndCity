import { InterestArea } from "../../view/interest-area";

export interface Command {
  facetsExtracted: { [key: string]: boolean },
  status: CommandStatus
}

export enum CommandStatus {
  SUBMITTED, COMPLETED
}

export function fromInterestArea(interestArea: InterestArea): Command {
  const facets = interestArea.answers.selectedClusters;
  const facetsExtracted: { [key: string]: boolean } = {}
  Object.keys(facets).filter(facet => facets[facet]).map(facet => facetsExtracted[facet] = false)

  return {
    facetsExtracted: facetsExtracted,
    status: CommandStatus.SUBMITTED
  };
}
