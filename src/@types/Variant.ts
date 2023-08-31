export const VARIANTS = [
  'solid',
  'soft',
  'clean'
] as const;
export type VariantType = typeof VARIANTS[number]