import {Filter, Preview} from '../../../Components';
import {CompoundFilterOperator, PropertyFilterOperator} from '../../../Components/Filter/Filter.types.ts';

type User = {
  id: string
  username: string
  email: string
}
const Page = () => (
  <div className='flex flex-col gap-9'>
    <Preview title='Property Filter'>
      <Filter<User>
        defaultProperty='id'
        value={{
          property: 'id',
          operator: PropertyFilterOperator.Equal,
          value: ''
        }}
        onChange={console.log}
      />
    </Preview>
    <Preview title='Coumpound Filter'>
      <Filter<User>
        className='bg-white rounded'
        defaultProperty='id'
        value={{
          operator: CompoundFilterOperator.And,
          filters: [
            {
              property: 'id',
              operator: PropertyFilterOperator.Equal,
              value: ''
            }
          ]
        }}
        onChange={console.log}
      />
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
);

export default Page;