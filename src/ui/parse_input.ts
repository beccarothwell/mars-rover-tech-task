import { PlateauCoordinates } from "../plateau/plateau.types";
import {
  DIRECTIONS,
  Rover,
  RoverDirection,
  RoverInstruction,
} from "../rover/rover.types";

export function parsePlateauInput(
  input: string
): PlateauCoordinates | undefined {
  if (input.length > 3 || input.charAt(1) !== " ") {
    return undefined;
  }
  const x = Number(input.charAt(0));
  const y = Number(input.charAt(2));

  if (isNaN(x) || isNaN(y)) {
    return undefined;
  }

  return [x, y];
}

export function parseRoverInput(input: string): RoverInstruction | undefined {
  if (input.length > 5 || input.charAt(1) !== " " || input.charAt(3) !== " ") {
    return undefined;
  }
  const x = Number(input.charAt(0));
  const y = Number(input.charAt(2));
  const direction = input.charAt(4);

  if (isNaN(x) || isNaN(y)) {
    return undefined;
  }
  if (!isRoverDirection(direction)) {
    return undefined;
  }

  return [[x, y], direction];
}

function isRoverDirection(input: string): input is RoverDirection {
  return DIRECTIONS.filter((direction) => direction === input).length > 0;
}
