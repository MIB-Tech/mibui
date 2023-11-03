import {Preview, Progress} from '../../../Components';
import {SIZING} from '../../../@types/Sizing.ts';
import {COLORS} from '../../../@types/Color.ts';

const Page = () => (
  <div className='flex flex-col gap-6'>
    <Preview title='Default'>
      <Progress state={50}/>
    </Preview>
    <Preview title='State'>
      <Progress state={0}/>
      <Progress state={25}/>
      <Progress state={50}/>
      <Progress state={75}/>
      <Progress state={100}/>
    </Preview>
    <Preview title='Size'>
      {SIZING.map(size => (
        <Progress key={size} state={50} size={size}/>
      ))}
    </Preview>
    <Preview title='With label'>
      <Progress state={50} showLabel/>
    </Preview>
    <Preview title='Color'>
      {COLORS.map(color => (
        <Progress key={color} state={50} color={color}/>
      ))}
    </Preview>
  </div>
);

export default Page