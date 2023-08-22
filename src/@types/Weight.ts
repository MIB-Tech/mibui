export type ValueUnion<T extends readonly number[]> = T[number];

// Define color weight options
const COLOR_WEIGHTS = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
] as const;

export type WeightType = ValueUnion<typeof COLOR_WEIGHTS>