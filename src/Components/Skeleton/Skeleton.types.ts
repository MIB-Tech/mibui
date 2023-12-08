import {HTMLAttributes} from "react";

export const SKELETON_VARIANTS = [
  'text-xs',
  'text-sm',
  'text',
  'text-md',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl'
] as const;

export const SHAPES = [
  'none',
  'md',
  'lg',
  'full'
] as const;

export type ShapeType = typeof SHAPES[number]
export type SizingType = typeof SKELETON_VARIANTS[number]
export type SkeletonProps = {
  variant?: SizingType,
  rounded?: ShapeType
} & HTMLAttributes<HTMLDivElement>