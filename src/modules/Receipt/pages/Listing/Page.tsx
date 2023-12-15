import {useMemo, useState} from 'react';
import {Column} from '../../../../Components/DataGrid/Column/Column.types.ts';
import DataGrid from '../../../../Components/DataGrid/DataGrid.tsx';
import {HydraModel} from '../../Model.ts';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {HydraCollection} from '../../../types.ts';
import {Badge, Button, Tooltip} from '../../../../Components';
import {Checkbox} from '../../../../Forms';
import {PrinterIcon} from '@heroicons/react/20/solid';
import {stringToI18nKey} from '../../../utils.ts';
import {Trans} from 'react-i18next';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {ModelCell} from '../../components/ModelCell.tsx';
import {twMerge} from 'tailwind-merge';
import {RouteEnum} from '../../../../@types/Route.ts';
import {Link} from 'react-router-dom';
import {ActionCell} from './ActionCell.tsx';
import {useBooleanState} from '../../../../hooks/UseBooleanState.tsx';
import PrintView from '../../../PurchaseOrder/components/PrintView/PrintView.tsx';
import {StringColumnFormat} from '../../../../Components/DataGrid/Column/String/String.types.ts';

const Page = () => {
  const [printModelOpen, setModalOpen] = useBooleanState();
  const query = useQuery({
    queryKey: [RouteEnum.ReceiptListing],
    queryFn: () => axios.get<HydraCollection<HydraModel>>('/receipts')
  });
  const collection = query.data?.data['hydra:member'] || [];
  // const totalItems = query.data?.data['hydra:totalItems'] || 10;
  // const [pagination, setPagination] = useState<{ page: number, itemsPerPage: number }>({
  //   page: 1,
  //   itemsPerPage: 10
  // });
  const [selectedIds, setSelectedIds] = useState<Array<number>>([]);

  const columns = useMemo<Array<Column<HydraModel>>>(() => {
    const collectionIds = collection.map(item => item.id);
    const allSelected = collectionIds.length > 0 && collection.every(item => selectedIds.includes(item.id));

    const columns: Array<Column<HydraModel>> = [
      {
        field: 'receiptNumber',
        header: (
          <div className='flex space-x-3 items-center'>
            <Checkbox
              checked={allSelected}
              onChange={() => setSelectedIds(allSelected ? [] : collectionIds)}
            />
            <div>N°</div>
          </div>
        ),
        renderCell: item => {
          const {id} = item;
          const checked = selectedIds.includes(id);

          return (
            <div className='flex space-x-3 items-center'>
              <Checkbox
                checked={checked}
                onChange={() => setSelectedIds(checked ?
                  selectedIds.filter(selectedId => selectedId !== id) :
                  [...selectedIds, id]
                )}
              />
              <ModelCell item={item}/>
            </div>
          );
        }
      },
      {field: 'receivedAt', header: 'BC', format: StringColumnFormat.Datetime},
      {field: 'purchaseOrder', renderCell: ({purchaseOrder}) => purchaseOrder && <ModelCell item={purchaseOrder}/>},
      {renderCell: item => <ActionCell item={item}/>},
    ];

    return columns.map(column => ({
      header: 'field' in column ? <Trans i18nKey={stringToI18nKey(column.field)}/> : undefined,
      ...column,
    }));
  }, [selectedIds, collection]);

  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex space-x-4 justify-between'>
        <div>
          {/*<Input*/}
          {/*  // placeholder='receiptNumber, ref ...'*/}
          {/*  startAdornment={(*/}
          {/*    <Icon icon={MagnifyingGlassIcon} size={5} className='h-100'/>*/}
          {/*  )}*/}
          {/*/>*/}
        </div>
        <div className='flex space-x-3'>
          <Tooltip content='Imprimer' placement='left'>
            <div>
              <IconButton
                className={twMerge(selectedIds.length > 0 && 'relative')}
                iconElement={PrinterIcon}
                color='primary'
                disabled={selectedIds.length === 0}
                onClick={() => setModalOpen(true)}
              >
                {selectedIds.length > 0 && (
                  <Badge
                    color='info'
                    className='absolute px-0 w-6 h-6 text-xs font-bold text-white border-2 border-white rounded-full -top-2 -end-2'
                  >
                    {selectedIds.length}
                  </Badge>
                )}
              </IconButton>
            </div>
          </Tooltip>
          <Link to='/receipts/create'>
            <Button>
              <Trans i18nKey={RouteEnum.ReceiptCreate}/>
            </Button>
          </Link>
        </div>
      </div>
      <DataGrid
        // hoverable
        stickyColumn
        size='sm'
        className='min-w-full'
        columns={columns}
        data={collection}
      />
      {/*<div className='flex justify-between'>*/}
      {/*  <div/>*/}
      {/*  <Pagination*/}
      {/*    variant='solid'*/}
      {/*    page={pagination.page}*/}
      {/*    setPage={page => setPagination({...pagination, page})}*/}
      {/*  />*/}
      {/*</div>*/}
      <PrintView
        open={printModelOpen}
        ids={selectedIds}
        endpoint='/print/receipts'
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Page;