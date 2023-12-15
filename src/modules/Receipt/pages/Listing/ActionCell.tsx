import {FC} from 'react';
import {HydraReceiptModel} from '../../index.ts';
import {Tooltip} from '../../../../Components';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {useBooleanState} from '../../../../hooks/UseBooleanState.tsx';
import PrintView from '../../../PurchaseOrder/components/PrintView/PrintView.tsx';
import {PrinterIcon} from '@heroicons/react/20/solid';

export const ActionCell: FC<{ item: HydraReceiptModel }> = ({item}) => {
  const [printModelOpen, setModalOpen] = useBooleanState();

  return (
    <>
      <div className='flex space-x-2 justify-end'>
        <Tooltip content='Imprimer' placement='left'>
          <div>
            <IconButton
              iconElement={PrinterIcon}
              variant='clean'
              color='primary'
              size='sm'
              onClick={() => {
                setModalOpen(true);
              }}
            />
          </div>
        </Tooltip>
        {/*<IconButton*/}
        {/*  iconElement={TrashIcon}*/}
        {/*  variant='clean'*/}
        {/*  color='error'*/}
        {/*  size='sm'*/}
        {/*  onClick={() => {*/}
        {/*  }}*/}
        {/*/>*/}
      </div>
      <PrintView
        open={printModelOpen}
        ids={[item.id]}
        endpoint='/print/receipts'
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};