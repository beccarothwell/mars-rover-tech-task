import { PlateauCoordinates } from "../plateau/plateau.types";
import {
  DIRECTIONS,
  INSTRUCTIONS,
  Rover,
  RoverDirection,
  RoverInstruction,
  RoverMovementInstruction,
} from "../rover/rover.types";

export function parsePlateauInput(
  input: string
): PlateauCoordinates | undefined {
  const coordinateValues = input.split(" ");

  if (coordinateValues.length !== 2) {
    return undefined;
  }

  const x = Math.round(Number(coordinateValues[0]));
  const y = Math.round(Number(coordinateValues[1]));

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

export function parseMovementInput(
  input: string
): RoverMovementInstruction | undefined {
  if (!isRoverMovementInstruction(input)) {
    return undefined;
  }
  return input;
}

function isRoverDirection(input: string): input is RoverDirection {
  return (DIRECTIONS as ReadonlyArray<string>).includes(input);
}

function isRoverMovementInstruction(
  input: string
): input is RoverMovementInstruction {
  return (INSTRUCTIONS as ReadonlyArray<string>).includes(input);
}
