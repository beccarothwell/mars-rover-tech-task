import { parsePlateauInput, parseRoverInput } from "./parse_input";

describe("returns undefined if passed an invalid string, i.e. a string that is not strictly formatted 'number number'", () => {
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
  test("returns undefined if passed two numbers in a string separated by multiple spaces", () => {
    const input = "1     2";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a string with more than two numbers separated by spaces", () => {
    const input = "1 2 N";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a random invalid string", () => {
    const input = "hey!";
    expect(parsePlateauInput(input)).toBe(undefined);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "5 5";
    expect(parsePlateauInput(input)).toEqual([5, 5]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "1 2";
    expect(parsePlateauInput(input)).toEqual([1, 2]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "50 50";
    expect(parsePlateauInput(input)).toEqual([50, 50]);
  });
  test("returns an array containing two numbers if passed a valid string of format 'number number'", () => {
    const input = "1000 10000";
    expect(parsePlateauInput(input)).toEqual([1000, 10000]);
  });
});
describe("fractional numbers should be rounded to the nearest integer. Coordinates can be whole numbers only.", () => {
  test("returns an array containing two numbers rounded to the nearest integer", () => {
    expect(parsePlateauInput("5.5 5.6")).toEqual([6, 6]);
  });
  test("returns an array containing two numbers rounded to the nearest integer", () => {
    expect(parsePlateauInput("5.2 5.8")).toEqual([5, 6]);
  });
  test("returns an array containing two numbers rounded to the nearest integer", () => {
    expect(parsePlateauInput("10.1 50.9")).toEqual([10, 51]);
  });
});

describe("returns undefined if passed an invalid string, i.e. a string that is not strictly formatted 'number number N|E|S|W'", () => {
  test("returns undefined if given an empty string", () => {
    expect(parseRoverInput("")).toBe(undefined);
  });
  test("returns undefined if passed a single number string", () => {
    const input = "1";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers in a string not separated by a space", () => {
    const input = "12";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a string with only two numbers separated by a space", () => {
    const input = "1 2";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and a valid direction character in a string not separated by spaces", () => {
    const input = "12N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a string of two numbers seperated by a space and a valid direction character not separated by a space", () => {
    const input = "1 2N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a string of two numbers not seperated by a space and a valid direction character separated by a space", () => {
    const input = "12 N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and a valid direction character in a string not separated by a space", () => {
    const input = "1-2-N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and a valid direction character in a string not separated by a space", () => {
    const input = "1,2,N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and a valid direction character in a string not separated by a space", () => {
    const input = "1_2_N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and a valid direction character in a string separated by multiple spaces", () => {
    const input = "1     2           N";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed two numbers and an invalid direction character in a string separated by spaces", () => {
    const input = "1 2 B";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns undefined if passed a random invalid string", () => {
    const input = "hey!";
    expect(parseRoverInput(input)).toBe(undefined);
  });
  test("returns an array containing two numbers and a valid direction character if passed a valid string of format 'number number N|E|S|W'", () => {
    const input = "1 2 N";
    expect(parseRoverInput(input)).toEqual([[1, 2], "N"]);
  });
  test("returns an array containing two numbers and a valid direction character if passed a valid string of format 'number number N|E|S|W'", () => {
    const input = "1 2 E";
    expect(parseRoverInput(input)).toEqual([[1, 2], "E"]);
  });
  test("returns an array containing two numbers and a valid direction character if passed a valid string of format 'number number N|E|S|W'", () => {
    const input = "50 50 W";
    expect(parseRoverInput(input)).toEqual([[50, 50], "W"]);
  });
  test("returns an array containing two numbers and a valid direction character if passed a valid string of format 'number number N|E|S|W'", () => {
    const input = "867 9999 S";
    expect(parseRoverInput(input)).toEqual([[867, 9999], "S"]);
  });
});
describe("fractional numbers should be rounded to the nearest integer. Coordinates can be whole numbers only.", () => {
  test("returns an array containing an array of two numbers rounded to the nearest integer, and a valid direction character", () => {
    expect(parseRoverInput("5.5 5.6 N")).toEqual([[6, 6], "N"]);
  });
  test("returns an array containing an array of two numbers rounded to the nearest integer, and a valid direction character", () => {
    expect(parseRoverInput("5.2 5.8 W")).toEqual([[5, 6], "W"]);
  });
  test("returns an array containing an array of two numbers rounded to the nearest integer, and a valid direction character", () => {
    expect(parseRoverInput("10.1 50.9 E")).toEqual([[10, 51], "E"]);
  });
});
