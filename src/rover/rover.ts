import { Rover } from "./rover.types";
import { parseRoverInput } from "../ui/parse_input";
import { Plateau } from "../plateau/plateau.types";

export function placeRover(plateau: Plateau, input: string): Rover {
  const roverPlacement = parseRoverInput(input);

  if (roverPlacement === undefined) {
    throw new Error(
      "Invalid Rover placement instructions. Instructions must be two numbers, x and y coordinates, seperated by a space, followed by a direction seperated by a space e.g. '1 2 N'"
    );
  }

  const roverCoordinates = roverPlacement[0];
  const roverDirection = roverPlacement[1];

  if (roverCoordinates[0] > plateau.x) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau maximum x coordinate is ${plateau.x}`
    );
  }
  if (roverCoordinates[1] > plateau.y) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau maximum y coordinate is ${plateau.y}`
    );
  }

  return {
    x: roverCoordinates[0],
    y: roverCoordinates[1],
    direction: roverDirection,
  };
}
