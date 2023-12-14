import {ModalProps} from '../../../../Components/Modal/Modal.types.tsx';

export type PrintModalProps<T extends object> = {
  ids: number[],
  endpoint: string
  getItemParams?: (item: T) => object
} & ModalProps