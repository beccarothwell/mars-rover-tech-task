const DIRECTIONS = ["N", "S", "E", "W"] as const;
type RoverDirection = (typeof DIRECTIONS)[number];

type Rover = {
  x: number;
  y: number;
  direction: RoverDirection;
};
