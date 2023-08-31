import {Alert, Preview} from '../../../Components';
import {Select} from '../../../Forms';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Alert
        variant='clean'
        title='The Select components uses Autocomplete'
      />
      <Preview
        title='Basic'
        className='flex justify-center'
      >
        <Select options={['Option 1', 'Option 2']}/>
      </Preview>
    </div>
  );
};

export default Page;