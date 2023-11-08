import { PlateauCoordinates } from "../plateau/plateau.types";

export const DIRECTIONS = ["N", "E", "S", "W"] as const;
export type RoverDirection = (typeof DIRECTIONS)[number];

export type Rover = {
  x: number;
  y: number;
  direction: RoverDirection;
};

export type RoverInstruction = [PlateauCoordinates, RoverDirection];

export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type RoverMovementInstruction = (typeof INSTRUCTIONS)[number];
