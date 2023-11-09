import { PlateauCoordinates } from "../plateau/plateau.types";
import {
  DIRECTIONS,
  INSTRUCTIONS,
  Rover,
  RoverDirection,
  RoverPlacement,
  RoverInstruction,
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

export function parseRoverInput(input: string): RoverPlacement | undefined {
  const roverPositionValues = input.split(" ");

  if (roverPositionValues.length !== 3) {
    return undefined;
  }

  const x = Math.round(Number(roverPositionValues[0]));
  const y = Math.round(Number(roverPositionValues[1]));
  const direction = roverPositionValues[2].toUpperCase();

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
): RoverInstruction | undefined {
  const toUpperCase = input.toUpperCase();
  if (!isRoverInstruction(toUpperCase)) {
    return undefined;
  }
  return toUpperCase;
}

function isRoverDirection(input: string): input is RoverDirection {
  return (DIRECTIONS as ReadonlyArray<string>).includes(input);
}

function isRoverInstruction(input: string): input is RoverInstruction {
  return (INSTRUCTIONS as ReadonlyArray<string>).includes(input);
}
