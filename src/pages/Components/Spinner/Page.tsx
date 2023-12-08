import {Preview, Spinner} from '../../../Components';

import {COLORS} from '../../../@types/Color.ts';
import {SIZING} from '../../../@types/Sizing.ts';

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Colors'>
        <div className='flex items-center justify-center gap-2'>
          {COLORS.map(color => (
            <Spinner key={color} color={color}/>
          ))}
        </div>
      </Preview>
      <Preview title='Sizing'>
        <div className='flex items-center justify-center gap-2'>
          {SIZING.map(size => (
            <Spinner key={size} size={size}/>
          ))}
        </div>
      </Preview>
    </div>
  )
}

export default Page