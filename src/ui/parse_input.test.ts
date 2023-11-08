import { parsePlateauInput } from "./parse_input";

describe("returns if passed an invalid string, i.e. a string that is not strictly formatted 'number number'", () => {
  test("returns undefined if given an empty string", () => {
    expect(parsePlateauInput("")).toBe(undefined);
  });
  test("returns undefined if passed a single number string", () => {
    const input = "1";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "12";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "1-2";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "1,2";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "1_2";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "1     2";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "1 2 N";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "5 5";
    expect(parsePlateauInput(input)).toBe([5, 5]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "1 2";
    expect(parsePlateauInput(input)).toBe([1, 2]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "50 50";
    expect(parsePlateauInput(input)).toBe([50, 50]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "1000 10000";
    expect(parsePlateauInput(input)).toBe([1000, 10000]);
  });
});