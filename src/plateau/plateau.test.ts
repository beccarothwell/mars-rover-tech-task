import { definePlateau } from "../plateau/plateau";
describe("test add function", () => {
  test("initial test", () => {
    expect(definePlateau(5, 5)).toEqual({ x: 5, y: 5 });
  });
});
