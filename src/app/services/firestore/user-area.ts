import { v4 as uuid } from "uuid";
import { InterestArea } from "../../view/interest-area";

// TODO: TO IMPROVE IN THE FUTURE ;)
const userId = uuid();

export interface UserArea extends InterestArea {
  user_id: string
}

export function createUserAreaFrom(interestArea: InterestArea): UserArea {
  const { area, ...others } = interestArea;
  return {
    user_id: userId,
    ...others,
    area: {
      id: area.id,
      geojson: { ...area.geojson.geometry.coordinates[0] }
    }
  };
}
