export const VARIANTS = [
  'solid',
  'light',
  'clean'
] as const;
export type VariantType = typeof VARIANTS[number]