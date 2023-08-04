import {Preview} from '../../../Components';
import {InputNumber} from '../../../Forms';


const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Default" >
        <InputNumber />
      </Preview>
      <Preview title="Step 0.01" >
        <InputNumber step={.01} />
      </Preview>
      <Preview title="Min / Max" >
        <InputNumber
          min={0}
          max={5}
          value={10}
        />
      </Preview>
    </div>
  )
}

export default Page