import {Input, InputNumber, InputPassword, UnstyledInput} from '../../../Forms';
import {Preview} from '../../../Components';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const InputPage = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview
        title='Basic '
        className='flex justify-center'
      >
        <Input placeholder='Default input'/>
      </Preview>
      <Preview
        title='Form props'
        className='grid grid-cols-4 gap-6'
      >
        <Input placeholder='Disabled' disabled/>
        <Input placeholder='Read Only' readOnly/>
        <Input placeholder='Focused' className='Mui-focused'/>
        <Input placeholder='Error' error/>
        <Input placeholder='Password' type='password'/>
        <Input placeholder='Number' type='number'/>
        <Input placeholder='Search' type='search'/>
        <Input placeholder='Search' type='search'/>
      </Preview>
      <Preview
        title='Input Adornments'
        className='grid grid-cols-3 gap-6'
      >
        <Input placeholder='Weight' startAdornment='Kg'/>
        <Input placeholder='Username' endAdornment='@mibtech.ma'/>
        <Input placeholder='host' startAdornment='https://' endAdornment='@mibtech.ma'/>
        <InputPassword/>
        <InputNumber/>
      </Preview>
      <Preview
        title='Multiline'
        className='grid gap-6'
      >
        <Input placeholder='Basic' multiline/>
        <Input placeholder='Minimum 3 rows' multiline minRows={3}/>
        <Input placeholder='Maximum 3 rows' multiline maxRows={3}/>
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
        title='Unstyled'
        className='grid gap-6'
      >
        <UnstyledInput placeholder='Unstyled' />
        <UnstyledInput placeholder='Unstyled (Multilines)' multiline minRows={3}/>
      </Preview>
    </div>
  )
}

export default InputPage