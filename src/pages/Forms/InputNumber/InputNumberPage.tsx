import {Preview} from '../../../Components';
import {InputNumber} from '../../../Forms';
import {SizeEnum} from '../../../Components/Button/Button.types.tsx';


const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Default" >
        <InputNumber/>
      </Preview>
      <Preview title="Step 0.01" >
        <InputNumber step={.01} />
      </Preview>
      <Preview title="Min / Max" >
        <InputNumber
          min={0}
          max={5}
        />
      </Preview>
      <Preview title="Sizes" className='flex flex-col gap-2'>
        <InputNumber size={SizeEnum.Small} placeholder='Small'/>
        <InputNumber placeholder='Default'/>
        <InputNumber size={SizeEnum.Large} placeholder='Large'/>
      </Preview>
    </div>
  )
}

export default Page