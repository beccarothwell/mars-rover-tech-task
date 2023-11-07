export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type RoverDirection = (typeof DIRECTIONS)[number];

export type Rover = {
  x: number;
  y: number;
  direction: RoverDirection;
};
