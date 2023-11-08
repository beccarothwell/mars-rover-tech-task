import {
  Rover,
  DIRECTIONS,
  RoverDirection,
  RoverMovementInstruction,
} from "./rover.types";
import { parseRoverInput, parseMovementInput } from "../ui/parse_input";
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

export function moveRover(rover: Rover, input: string) {
  const instructions = input.split("");
  let currentDirection = rover.direction;
  let currentXCoordinate = rover.x;
  let currentYCoordinate = rover.y;

  instructions.forEach((instruction) => {
    const parseInst = parseMovementInput(instruction);
    if (parseInst === undefined) {
      throw new Error(
        "Invalid movement instruction. Valid instructions are 'L', 'R', or 'M'"
      );
    }
    if (parseInst === "L") {
      switch (currentDirection) {
        case "N":
          currentDirection = "W";
          break;
        case "E":
          currentDirection = "N";
          break;
        case "S":
          currentDirection = "E";
          break;
        case "W":
          currentDirection = "S";
          break;
      }
    } else if (parseInst === "R") {
      switch (currentDirection) {
        case "N":
          currentDirection = "E";
          break;
        case "E":
          currentDirection = "S";
          break;
        case "S":
          currentDirection = "W";
          break;
        case "W":
          currentDirection = "N";
          break;
      }
    } else if (parseInst === "M") {
      switch (currentDirection) {
        case "N":
          currentXCoordinate++;
          break;
        case "E":
          currentYCoordinate++;
          break;
        case "S":
          currentXCoordinate--;
          break;
        case "W":
          currentYCoordinate--;
          break;
      }
    }
  });

  rover.x = currentXCoordinate;
  rover.y = currentYCoordinate;
  rover.direction = currentDirection;
  return rover;
}
