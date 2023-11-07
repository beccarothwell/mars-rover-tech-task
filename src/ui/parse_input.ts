import { PlateauCoordinates } from "../plateau/plateau.types";

export function parsePlateauInput(
  input: string
): PlateauCoordinates | undefined {
  if (input.length > 3 || input.charAt(1) !== " ") {
    return undefined;
  }
  const x = Number(input.charAt(0));
  const y = Number(input.charAt(2));

  if (isNaN(x) || isNaN(y)) {
    return undefined;
  }

  return [x, y];
}
