import {FC} from 'react';
import {PurchaseOrderModel} from '../../index.ts';
import {Tooltip} from '../../../../Components';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {DocumentTextIcon, PrinterIcon} from '@heroicons/react/20/solid';
import PrintView from '../../components/PrintView/PrintView.tsx';
import {useBooleanState} from '../../../../hooks/UseBooleanState.tsx';
import {useGenerateReceipt} from '../../../Receipt/pages/Create/Page.utils.ts';

export const ActionCell: FC<{ item: PurchaseOrderModel }> = ({item}) => {
  const [printModelOpen, setModalOpen] = useBooleanState();
  const generateReceipt = useGenerateReceipt();

  return (
    <>
      <div className='flex space-x-2 justify-end'>
        <Tooltip content='Génerer bon de réception' placement='left'>
          <div>
            <IconButton
              iconElement={DocumentTextIcon}
              variant='clean'
              color='primary'
              size='sm'
              loading={generateReceipt.isPending}
              onClick={() => generateReceipt.mutate({id: item.id})}
            />
          </div>
        </Tooltip>
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
        endpoint='/print/purchase-orders'
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};