import {HTMLAttributes, ReactNode} from 'react';


export type CardProps = {
  header?: ReactNode
  footer?: ReactNode
} & HTMLAttributes<HTMLDivElement>