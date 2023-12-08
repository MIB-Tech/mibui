import {FC, useMemo, useState} from 'react';
import {Column} from '../../../../Components/DataGrid/Column/Column.types.ts';
import DataGrid from '../../../../Components/DataGrid/DataGrid.tsx';
import {HydraModel} from '../../Model.ts';
import {StringColumnFormat} from '../../../../Components/DataGrid/Column/String/String.types.ts';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {HydraCollection, HydraItem} from '../../../types.ts';
import {Link, LinkProps} from 'react-router-dom';
import {Button, Icon, Pagination} from '../../../../Components';
import {Checkbox, Input} from '../../../../Forms';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';

const ModelCell: FC<{ item: HydraItem } & { slotProps?: { title?: LinkProps } }> = ({item, slotProps, ...props}) => (
  <div {...props}>
    <div className='text-gray-400'>
      {item['@subTitle']}
    </div>
    <Link
      to={item.id.toString()} {...slotProps?.title}
      className='text-primary-600 dark:text-primary-500 hover:underline'
    >
      {item['@title']}
    </Link>
  </div>
);
const Page = () => {
  const query = useQuery({
    queryKey: ['TODO'],
    queryFn: () => axios.get<HydraCollection<HydraModel>>('/purchase-orders')
  });
  const collection = query.data?.data['hydra:member'] || [];
  // const totalItems = query.data?.data['hydra:totalItems'] || 10;
  const [pagination, setPagination] = useState<{ page: number, itemsPerPage: number }>({
    page: 1,
    itemsPerPage: 10
  });

  const columns = useMemo<Array<Column<HydraModel>>>(() => ([
    {
      field: 'orderNumber',
      renderCell: item => (
        <div className='flex space-x-3 items-center'>
          <Checkbox/>
          <ModelCell item={item}/>
        </div>
      )
    },
    {field: 'ref'},
    {field: 'externalRef'},
    {field: 'createdAt', format: StringColumnFormat.Datetime}
  ]), []);

  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex space-x-4 justify-between'>
        <div>
          <Input
            placeholder='orderNumber, ref ...'
            startAdornment={(
              <Icon icon={MagnifyingGlassIcon} size={5} className='h-100'/>
            )}
          />
        </div>
        <div>
          <Button>
            Imprimer
          </Button>
        </div>
      </div>
      <DataGrid
        stickyColumn
        size='sm'
        className='min-w-full'
        columns={columns}
        value={collection}
      />
      <div className='flex justify-between'>
        <div/>
        <Pagination
          variant='solid'
          page={pagination.page}
          setPage={page => setPagination({...pagination, page})}
        />
      </div>
    </div>
  );
};

export default Page;