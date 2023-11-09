import { parsePlateauInput } from "../ui/parse_input";
import { PlateauCoordinates, Plateau } from "./plateau.types";

export function createPlateau(input: string): Plateau {
  const coordinates = parsePlateauInput(input);

  if (coordinates === undefined) {
    throw new Error(
      "Invalid plateau coordinates. Coordinates must be two numbers seperated by a space, e.g. '5 5'"
    );
  }

  const x = coordinates[0];
  const y = coordinates[1];

  return {
    x: x,
    y: x,
  };
}
