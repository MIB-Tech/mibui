import {COLORS} from '../../../@types/Color';
import {Preview} from '../../../Components';
import {Switch} from '../../../Components/Switch';
import {SIZING} from '../../../@types/Sizing.ts';

const Page = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default' className='flex justify-center'>
        <Switch/>
        <Switch defaultChecked/>
      </Preview>
      <Preview title='Disabled State' className='flex justify-center'>
        <Switch disabled/>
        <Switch disabled defaultChecked/>
      </Preview>
      <Preview title='Sizing' className='grid grid-cols-3 items-center justify-items-center'>
        {SIZING.map(size => (
          <Switch
            key={size}
            size={size}
          />
        ))}
      </Preview>
      <Preview title='Colors' className='grid grid-cols-3 gap-6 justify-items-center'>
        {COLORS.map((item, index) => (
          <Switch
            key={index}
            color={item}
            defaultChecked
          />
        ))}
      </Preview>
    </div>
  );
};

export default Page;
