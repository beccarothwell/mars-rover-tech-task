import { placeRover } from "../rover/rover";
describe("placeRover should return an object of type Rover with x and y coordinates, and a direction of 'N', 'S', 'E' or 'W'", () => {
  test("an input of '1 2 N' should return a Rover object of {x: 1, y: 2, direction: 'N'}", () => {
    expect(placeRover("1 2 N")).toEqual({ x: 1, y: 2, direction: "N" });
  });
});
