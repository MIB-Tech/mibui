import {Preview} from '../../../Components';
import {InputNumber} from '../../../Forms';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default'>
        <InputNumber placeholder='Type a number'/>
      </Preview>
      <Preview title='Min / Max'>
        <InputNumber min={1} max={5} placeholder='Positive, Maximum 5'/>
      </Preview>
      <Preview title='Step'>
        <InputNumber step={.01} placeholder='Step 0.01'/>
      </Preview>
      <Preview title='Shift Multiplier'>
        <InputNumber placeholder='User shift key when interacting with the stepper buttons' shiftMultiplier={3}/>
      </Preview>
      <Preview title='Sizing' className='flex flex-col gap-2'>
        {SIZING.map(size => (
          <InputNumber
            key={size}
            size={size}
            placeholder={size}
            slotProps={{input: {placeholder: SIZING_CONFIG[size].label}}}
          />
        ))}
      </Preview>
    </div>
  )
}

export default Page