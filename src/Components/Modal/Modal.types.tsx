import {HTMLAttributes} from 'react';


import {SizingType} from '../../@types/Sizing.ts';


export type ModalProps = {
  open?: boolean;
  onClose?: () => void;
  size?: SizingType | 'fullscreen';
} & HTMLAttributes<HTMLDivElement>
