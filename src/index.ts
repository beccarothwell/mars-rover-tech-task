import { createPlateau } from "./plateau/plateau";
import { moveRover, createRover, roverStatus } from "./rover/rover";

const plateauInput = "5 5";
const rover1Input = "1 2 N";
const rover1Instructions = "LMLMLMLMM";
const rover2Input = "3 3 E";
const rover2Instructions = "MMRMMRMRRM";

const plateau = createPlateau(plateauInput);
const rover1 = createRover(plateau, rover1Input);
moveRover(plateau, rover1, rover1Instructions);
console.log(roverStatus(rover1));

const rover2 = createRover(plateau, rover2Input);
moveRover(plateau, rover2, rover2Instructions);
console.log(roverStatus(rover2));
