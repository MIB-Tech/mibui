import {Preview} from '../../../Components';
import {InputPassword} from '../../../Forms';
import {SizeEnum} from '../../../Components/Button/Button.types.tsx';


const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Default">
        <InputPassword/>
      </Preview>
      <Preview title="Sizes" className="flex flex-col gap-2">
        <InputPassword size={SizeEnum.Small} placeholder="Small"/>
        <InputPassword placeholder="Default"/>
        <InputPassword size={SizeEnum.Large} placeholder="Large"/>
      </Preview>
    </div>
  )
}

export default Page