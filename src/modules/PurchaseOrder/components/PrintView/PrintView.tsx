import {Modal, Tab, TabPanel, Tabs, TabsList} from '../../../../Components';
import {useEffect, useState} from 'react';
import {PrintModalProps} from './PrintView.types.ts';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {AbstractModel, HydraCollection} from '../../../index.ts';
import {ReportViewer} from '../../../../Components/Reporting';
import {IconButton} from '../../../../Components/IconButton/IconButton.tsx';
import {XMarkIcon} from '@heroicons/react/20/solid';
import {filterToParams} from '../../../../Components/Filter/Filter.utils.ts';
import {Filter} from '../../../../Components/Filter/Filter.types.ts';
import {PropertyFilterOperator} from '../../../../Components/Filter/Condition/Condition.types.ts';
import {ModelCell} from '../ModelCell.tsx';

const PrintView = <T extends object>({
                                       ids,
                                       endpoint,
                                       className,
                                       onClose,
                                       getItemParams,
                                       ...props
                                     }: PrintModalProps<T>) => {
  const [activeId, setActiveId] = useState<number | null>(ids[0]);
  const {data} = useQuery({
    queryKey: [endpoint],
    queryFn: () => {
      const filter: Filter<AbstractModel> = {
        property: 'id',
        operator: PropertyFilterOperator.In,
        value: ids
      };

      return axios.get<HydraCollection<T>>(endpoint, {params: filterToParams({filter, fieldsMapping: {}})});
    },
    enabled: !!props.open
  });
  const collection = data?.data['hydra:member'] || [];

  const activeItem = collection.find(item => item.id === activeId);
  useEffect(() => {
    if (!activeItem) {
      setActiveId(collection.at(0)?.id || null);
    }
  }, [activeItem]);

  return (
    <Modal
      {...props}
      size='fullscreen'
    >
      <div className='grid gap-y-5'>
        <div className='flex justify-between'>
          {activeItem && <ModelCell item={activeItem}/>}
          <div className='flex justify-end gap-2'>
            <IconButton
              color='secondary'
              iconElement={XMarkIcon}
              onClick={() => onClose?.()}
            />
          </div>
        </div>
        <Tabs
          value={activeId}
          onChange={(_, id) => setActiveId(id as number)}
          vertical
        >
          <TabsList>
            {collection.map(item => (
              <Tab value={item.id}>
                {item['@title']}
              </Tab>
            ))}
          </TabsList>
          {collection.map(item => (
            <TabPanel value={item.id} className='w-full'>
              <ReportViewer
                fileName='purchase-order-report.mrt'
                params={getItemParams?.(item) || item}
              />
            </TabPanel>
          ))}
        </Tabs>
        {/*<Tooltip content='Imprimer' placement='left'>*/}
        {/*  <div>*/}
        {/*    <IconButton*/}
        {/*      iconElement={PrinterIcon}*/}
        {/*      color='primary'*/}
        {/*      onClick={() => {*/}
        {/*        // TODO Print All*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</Tooltip>*/}
      </div>
    </Modal>
  );
};

export default PrintView;