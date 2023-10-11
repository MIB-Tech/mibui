import {Preview} from '../../../Components';
import {ConditionFilterExample} from './ConditionFilterExample.tsx';
import {CompoundFilterExample} from './CompoundFilterExample.tsx';


const Page = () => (
  <div className='flex flex-col gap-9'>
    <Preview title='Property Filter'>
      <ConditionFilterExample/>
    </Preview>
    <Preview title='Coumpound Filter'>
      <CompoundFilterExample
        className='bg-white rounded'
      />
      {/*<ConditionFilterExample*/}
      {/*  className='bg-white rounded'*/}
      {/*  value={{*/}
      {/*    operator: CompoundFilterOperator.And,*/}
      {/*    filters: [PROPERTY_FILTER]*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<div>*/}
      {/*  <Popup*/}
      {/*    open*/}
      {/*    content={(*/}
      {/*      <Filter<User>*/}
      {/*        value={{*/}
      {/*          operator: CompoundFilterOperator.And,*/}
      {/*          filters: [*/}
      {/*            {*/}
      {/*              property: 'id',*/}
      {/*              operator: PropertyFilterOperator.Equal,*/}
      {/*              value: ''*/}
      {/*            }*/}
      {/*          ]*/}
      {/*        }}*/}
      {/*        onChange={console.log}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*    placement='bottom-start'*/}
      {/*    className='p-2'*/}
      {/*  >*/}
      {/*    <Button>Filter</Button>*/}
      {/*  </Popup>*/}
      {/*</div>*/}
    </Preview>
  </div>
)
export default Page;