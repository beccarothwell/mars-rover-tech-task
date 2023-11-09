import { Rover } from "./rover.types";
import { parseRoverInput, parseMovementInput } from "../ui/parse_input";
import { Plateau } from "../plateau/plateau.types";

export function createRover(plateau: Plateau, input: string): Rover {
  const roverPlacement = parseRoverInput(input);

  if (roverPlacement === undefined) {
    throw new Error(
      "Invalid Rover placement instructions. Instructions must be two numbers, x and y coordinates, seperated by a space, followed by a direction seperated by a space e.g. '1 2 N'"
    );
  }

  const roverXCoordinate = roverPlacement[0][0];
  const roverYCoordinate = roverPlacement[0][1];
  const roverDirection = roverPlacement[1];

  if (roverXCoordinate < 0) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau minimum x coordinate is 0`
    );
  }
  if (roverYCoordinate < 0) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau minimum y coordinate is 0`
    );
  }
  if (roverXCoordinate > plateau.x) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau maximum x coordinate is ${plateau.x}`
    );
  }
  if (roverYCoordinate > plateau.y) {
    throw new Error(
      `Rover cannot be placed outside of the Plateau maximum y coordinate is ${plateau.y}`
    );
  }

  return {
    x: roverXCoordinate,
    y: roverYCoordinate,
    direction: roverDirection,
  };
}

export function moveRover(plateau: Plateau, rover: Rover, input: string) {
  const instructions = input.split("");
  let currentDirection = rover.direction;
  let currentXCoordinate = rover.x;
  let currentYCoordinate = rover.y;

  instructions.forEach((instruction) => {
    const parsedInstruction = parseMovementInput(instruction);
    if (parsedInstruction === undefined) {
      throw new Error(
        "Invalid movement instruction. Valid instructions are 'L', 'R', or 'M'"
      );
    }
    if (parsedInstruction === "L") {
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
    } else if (parsedInstruction === "R") {
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
    } else if (parsedInstruction === "M") {
      switch (currentDirection) {
        case "N":
          if (currentYCoordinate === plateau.y) {
            throw new Error(
              `Rover cannot move outside of the Plateau. The maximum y coordinate is ${plateau.y}`
            );
          } else {
            currentYCoordinate++;
          }
          break;
        case "E":
          if (currentXCoordinate === plateau.x) {
            throw new Error(
              `Rover cannot move outside of the Plateau. The maximum x coordinate is ${plateau.x}`
            );
          } else {
            currentXCoordinate++;
          }
          break;
        case "S":
          if (currentYCoordinate === 0) {
            throw new Error(
              "Rover cannot move outside of the Plateau. The minimum y coordinate is 0"
            );
          } else {
            currentYCoordinate--;
          }
          break;
        case "W":
          if (currentXCoordinate === 0) {
            throw new Error(
              `Rover cannot move outside of the Plateau. The minimum x coordinate is 0`
            );
          } else {
            currentXCoordinate--;
          }
          break;
      }
    }
  });

  rover.x = currentXCoordinate;
  rover.y = currentYCoordinate;
  rover.direction = currentDirection;
  return rover;
}

export function roverStatus(rover: Rover) {
  return `${rover.x} ${rover.y} ${rover.direction}`;
}
