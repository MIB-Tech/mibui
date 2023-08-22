import {Preview} from '../../../Components';
import {InputNumber} from '../../../Forms';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default'>
        <InputNumber/>
      </Preview>
      <Preview title='Step 0.01'>
        <InputNumber step={.01}/>
      </Preview>
      <Preview title='Min / Max'>
        <InputNumber
          min={0}
          max={5}
        />
      </Preview>
      <Preview title='Sizing' className='flex flex-col gap-2'>
        {SIZING.map(size => (
          <InputNumber
            key={size}
            size={size}
            placeholder={SIZING_CONFIG[size].label}
          />
        ))}
      </Preview>
    </div>
  )
}

export default Page