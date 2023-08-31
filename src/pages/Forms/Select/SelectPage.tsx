import {Alert, Preview} from '../../../Components';
import {Select} from '../../../Forms';
import {Link} from 'react-router-dom';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Alert
        variant='soft'
        color='primary'
        title={(
          <div>
            The Select components uses Autocomplete features, check <Link to='/form/autocomplete' className='underline'>Autocomplete</Link> out!
          </div>
        )}
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