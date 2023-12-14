import {Modal, Tab, TabPanel, Tabs, TabsList} from '../../../../Components';
import {FC} from 'react';
import {PrintModalProps} from './PrintView.types.ts';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {HydraModel} from '../../Model.ts';
import {HydraCollection} from '../../../index.ts';

const PrintView: FC<PrintModalProps> = ({ids, endpoint, ...props}) => {
  const query = useQuery({
    queryKey: [endpoint],
    queryFn: () => axios.get<HydraCollection<HydraModel>>(endpoint)
  });
  const collection = query.data?.data['hydra:member'] || [];

  return (
    <Modal {...props}>
      <div>
        <Tabs defaultValue={1}>
          <TabsList>
            {collection.map(item => (
              <Tab value={item.id}>
                {item['@title']}
              </Tab>
            ))}
          </TabsList>
          {collection.map(item => (
            <TabPanel value={item.id}>
              Tab Content {item.id}
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