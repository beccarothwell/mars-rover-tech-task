import { placeRover } from "../rover/rover";
import { definePlateau } from "../plateau/plateau";

describe("placeRover should return an object of type Rover with x and y coordinates, and a direction of 'N', 'S', 'E' or 'W'", () => {
  const plateau = definePlateau("5 5");
  const roverPlacement = "1 2 N";
  test("an input of '1 2 N' should return a Rover object of {x: 1, y: 2, direction: 'N'}", () => {
    expect(placeRover(plateau, roverPlacement)).toEqual({
      x: 1,
      y: 2,
      direction: "N",
    });
  });
});
describe("rover should not be placed outside of the Plateau", () => {
  const plateau = definePlateau("5 5");
  const roverPlacement = "6 2 N";
  test("", () => {
    expect(() => {
      placeRover(plateau, roverPlacement);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau maximum x coordinate is 5"
    );
  });
  const roverPlacement2 = "1 6 N";
  test("", () => {
    expect(() => {
      placeRover(plateau, roverPlacement2);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau maximum y coordinate is 5"
    );
  });
  const roverPlacement3 = "6 6 N";
  test("", () => {
    expect(() => {
      placeRover(plateau, roverPlacement3);
    }).toThrow(
      "Rover cannot be placed outside of the Plateau maximum x coordinate is 5"
    );
  });
});
