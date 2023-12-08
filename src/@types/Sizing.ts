export type SizingType = typeof SIZING[number]

export const SIZING = [
  // 'xs',
  'sm',
  'md',
  'lg',
  // 'xl',
  // '2xl',
  // '3xl',
  // '4xl',
  // '5xl',
  // '6xl',
  // '7xl',
  // '8xl',
  // '9xl'
] as const;

export const SIZING_CONFIG:Record<SizingType, {label: string}> = {
  lg: {label: 'Large'},
  md: {label: 'Default'},
  sm: {label: 'Small'},
}