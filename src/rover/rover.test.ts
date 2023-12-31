import { createRover, moveRover, roverStatus } from "../rover/rover";
import { createPlateau } from "../plateau/plateau";
import { RoverDirection } from "./rover.types";

describe("placeRover should return an object of type Rover with x and y coordinates, and a direction of 'N', 'S', 'E' or 'W'", () => {
  const plateau = createPlateau("5 5");
  const roverPlacement = "1 2 N";
  test("an input of '1 2 N' should return a Rover object of {x: 1, y: 2, direction: 'N'}", () => {
    expect(createRover(plateau, roverPlacement)).toEqual({
      x: 1,
      y: 2,
      direction: "N",
    });
  });
});

describe("rover should not be placed outside of the Plateau", () => {
  const plateau = createPlateau("5 5");
  test("should throw an error if rover placed further than the maximum x coordinate of the Plateau", () => {
    const roverPlacement = "6 2 N";
    expect(() => {
      createRover(plateau, roverPlacement);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau maximum x coordinate is 5"
    );
  });
  test("should throw an error if rover placed further than the maximum y coordinate of the Plateau", () => {
    const roverPlacement = "1 6 N";
    expect(() => {
      createRover(plateau, roverPlacement);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau maximum y coordinate is 5"
    );
  });
  test("should throw an error if rover placed further than the minimum x coordinate of the Plateau", () => {
    const roverPlacement = "-1 5 N";
    expect(() => {
      createRover(plateau, roverPlacement);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau minimum x coordinate is 0"
    );
  });
  test("should throw an error if rover placed further than the minimum y coordinate of the Plateau", () => {
    const roverPlacement = "3 -1 N";
    expect(() => {
      createRover(plateau, roverPlacement);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau minimum y coordinate is 0"
    );
  });
});

describe("rover direction should be updated to the next anti-clockwise compass point if instructed to turn left", () => {
  const input = "L";
  const plateau = { x: 5, y: 5 };
  test("rover direction should be W if facing N and told to turn left", () => {
    const rover = { x: 1, y: 2, direction: "N" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "W" });
  });
  test("rover direction should be S if facing W and told to turn left", () => {
    const rover = { x: 1, y: 2, direction: "W" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "S" });
  });
  test("rover direction should be E if facing S and told to turn left", () => {
    const rover = { x: 1, y: 2, direction: "S" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "E" });
  });
  test("rover direction should be N if facing E and told to turn left", () => {
    const rover = { x: 1, y: 2, direction: "E" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "N" });
  });
});

describe("rover direction should be updated to the next clockwise compass point if instructed to turn right", () => {
  const input = "R";
  const plateau = { x: 5, y: 5 };
  test("rover direction should be E if facing N and told to turn right", () => {
    const rover = { x: 1, y: 2, direction: "N" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "E" });
  });
  test("rover direction should be S if facing E and told to turn right", () => {
    const rover = { x: 1, y: 2, direction: "E" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "S" });
  });
  test("rover direction should be W if facing S and told to turn right", () => {
    const rover = { x: 1, y: 2, direction: "S" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "W" });
  });
  test("rover direction should be N if facing W and told to turn right", () => {
    const rover = { x: 1, y: 2, direction: "W" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 2, direction: "N" });
  });
});

describe("rover should move one coordinate on the x or y axis based on direction faced", () => {
  const input = "M";
  const plateau = { x: 5, y: 5 };
  test("rover should move up one coordinate on the y axis if facing N", () => {
    const rover = { x: 1, y: 2, direction: "N" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 3, direction: "N" });
  });
  test("rover should move up one coordinate on the x axis if facing E", () => {
    const rover = { x: 1, y: 2, direction: "E" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 2, y: 2, direction: "E" });
  });
  test("rover should move down one coordinate on the y axis if facing S", () => {
    const rover = { x: 1, y: 2, direction: "S" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 1, direction: "S" });
  });
  test("rover should move down one coordinate on the x axis if facing W", () => {
    const rover = { x: 1, y: 2, direction: "W" as RoverDirection };
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 0, y: 2, direction: "W" });
  });
});

describe("rover should not move past the edge of the Plateau", () => {
  const input = "M";
  const plateau = { x: 5, y: 5 };
  test("if facing S at y: 0 rover should not move", () => {
    const rover = { x: 1, y: 0, direction: "S" as RoverDirection };
    expect(() => {
      moveRover(plateau, rover, input);
    }).toThrow(
      "Rover cannot move outside of the Plateau. The minimum y coordinate is 0"
    );
  });
  test("if facing W at x: 0 rover should not move", () => {
    const rover = { x: 0, y: 2, direction: "W" as RoverDirection };
    expect(() => {
      moveRover(plateau, rover, input);
    }).toThrow(
      "Rover cannot move outside of the Plateau. The minimum x coordinate is 0"
    );
  });
  test("if facing N at y: 5, on a Plateau of 5 5, rover should not move", () => {
    const rover = { x: 1, y: 5, direction: "N" as RoverDirection };

    expect(() => {
      moveRover(plateau, rover, input);
    }).toThrow(
      "Rover cannot move outside of the Plateau. The maximum y coordinate is 5"
    );
  });
  test("if facing E at x: 5, on a Plateau of 5 5, rover should not move", () => {
    const rover = { x: 5, y: 2, direction: "E" as RoverDirection };
    expect(() => {
      moveRover(plateau, rover, input);
    }).toThrow(
      "Rover cannot move outside of the Plateau. The maximum x coordinate is 5"
    );
  });
});

describe("rover should move multiple spaces and make turns according to a string of instructions", () => {
  const plateau = { x: 5, y: 5 };
  test("rover should turn left, move one West, turn left, move one South, turn left, move one East, turn Left, move two North", () => {
    const rover = { x: 1, y: 2, direction: "N" as RoverDirection };
    const input = "LMLMLMLMM";
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 1, y: 3, direction: "N" });
  });
  test("rover should move two East, turn right, move two South, turn right, move one West, turn right, turn right, move one East", () => {
    const rover = { x: 3, y: 3, direction: "E" as RoverDirection };
    const input = "MMRMMRMRRM";
    const result = moveRover(plateau, rover, input);
    expect(result).toEqual({ x: 5, y: 1, direction: "E" });
  });
});

describe("return the rover's current coordinates and direction", () => {
  test("return the rovers x and y coordinates, and direction, as a string", () => {
    const rover = { x: 1, y: 2, direction: "E" as RoverDirection };
    const result = "1 2 E";
    expect(roverStatus(rover)).toBe(result);
  });
});
