/**
 * The amount of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = function (actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
};

export const preparationTimeInMinutes = function (numberOfLayers) {
  return numberOfLayers * 2;
};

export const totalTimeInMinutes = function (
  numberOfLayers,
  actualMinutesInOven
) {
  return numberOfLayers * 2 + actualMinutesInOven;
};
