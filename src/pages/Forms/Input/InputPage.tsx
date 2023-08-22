import {Input, UnstyledInput} from '../../../Forms';
import {Preview} from '../../../Components';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const InputPage = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview
        title='Unstyled Input'
        className='flex justify-center'
      >
        <UnstyledInput
          placeholder='Text input'
        />
      </Preview>
      <Preview
        title='Default Input'
        className='flex justify-center'
      >
        <Input
          placeholder='Default input'
        />
      </Preview>
      <Preview
        title='Input Sizing'
        className='flex justify-center items-center gap-6'
      >
        {SIZING.map(size => (
          <div key={size}>
            <Input size={size} placeholder={SIZING_CONFIG[size].label}/>
          </div>
        ))}
      </Preview>
      <Preview
        title='Disabled/Readonly Input'
        className='flex justify-center gap-6'
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