import {Preview} from '../../../Components';
import {DatePickerExample} from './DatePage.tsx';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview
        title='Date Multiple'
        className='flex justify-center'
      >
        <DatePickerExample
          includeTime
          mode='multiple'
        />
      </Preview>
      <Preview
        title='Inline Calendar'
        className='flex justify-center space-x-4'
      >
        <DatePickerExample mode='multiple' inline/>
      </Preview>
    </div>
  );
};

export default Page;