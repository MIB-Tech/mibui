import {FC, useState} from 'react';
import Button from '../../../Components/Button/Button.tsx';
import Modal from '../../../Components/Modal/Modal.tsx';
import {ModalProps} from '../../../Components/Modal/Modal.types.tsx';

export const ModalExample: FC<{ buttonLabel?: string } & ModalProps> = ({buttonLabel = 'Default', ...props}) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <Button onClick={() => setOpen(true)}>
          {buttonLabel}
        </Button>
      </div>
      <Modal
        {...props}
        open={open}
        onClose={onClose}
        title="Payment Successfully"
      >
        <p className="text-sm">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of
          your order.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant='soft' color='warning'>Refund</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Modal>
    </>
  )
}