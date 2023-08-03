import {Input, UnstyledInput} from '../../../Forms';
import {Preview} from '../../../Components';
import {SizeEnum} from '../../../Components/Button/Button.types.tsx';

const InputPage = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview
        title="Unstyled Input"
        className='flex justify-center gap-5'
      >
        <UnstyledInput
          placeholder='Text input'
        />
        <UnstyledInput
          placeholder='Number input'
        />
      </Preview>
      <Preview
        title="Default Input"
        className='flex justify-center'
      >
        <Input />
      </Preview>
      <Preview
        title="Input Sizes"
        className='flex justify-center items-center gap-6'
      >
        <div>
          <Input size={SizeEnum.Small}/>
        </div>
        <div>
          <Input />
        </div>
        <div>
          <Input size={SizeEnum.Large}/>
        </div>
      </Preview>
      <Preview
        title="Disabled/Readonly Input"
        className='flex justify-center  gap-6'
      >
        <Input
          placeholder='Disabled Input'
          value='Disabled'
          disabled
        />
        <Input
          placeholder='Disabled Input'
          value='Readonly'
          readOnly
        />
      </Preview>
    </div>
  )
}

export default InputPage