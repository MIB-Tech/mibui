import {ModalProps} from '../../../../Components/Modal/Modal.types.tsx';

export type PrintModalProps = {
  ids: number[],
  endpoint: string
} & ModalProps