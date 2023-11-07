import { Rover } from "./rover.types";
import { parseRoverInput } from "../ui/parse_input";

export function placeRover(input: string): Rover {
  const roverPlacement = parseRoverInput(input);

  if (roverPlacement === undefined) {
    throw new Error(
      "Invalid Rover placement instructions. Instructions must be two numbers, x and y coordinates, seperated by a space, followed by a direction seperated by a space e.g. '1 2 N'"
    );
  }
  return roverPlacement;
}
