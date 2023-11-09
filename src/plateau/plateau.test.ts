import { createPlateau } from "../plateau/plateau";
describe("definePlateau should return an object of type Plateau with the maximum x and y coordinates", () => {
  test("an input of 5 5 should return a Plateau object of {x: 5, y: 5}", () => {
    expect(createPlateau("5 5")).toEqual({ x: 5, y: 5 });
  });
});
