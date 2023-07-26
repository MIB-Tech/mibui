import {HTMLAttributes, ReactNode} from 'react';


export type PropsType = {
  header?: ReactNode
  footer?: ReactNode
} & HTMLAttributes<HTMLDivElement>