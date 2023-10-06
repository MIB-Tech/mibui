import {Preview} from '../../../Components';
import {Option, Select} from '../../../Forms';
import {SelectProps} from '../../../Forms/Select/Select.types.ts';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const ExampleSelect = ({...props}: SelectProps<{}, false>) => (
  <Select placeholder='Select an option' {...props}>
    <Option value={1}>Documentation</Option>
    <Option value={2}>Components</Option>
    <Option value={3}>Features</Option>
  </Select>
);

const Page = () => (
  <div className='flex flex-col gap-12'>
    <Preview
      title='Basic'
      className='flex justify-center'
    >
      <ExampleSelect/>
    </Preview>
    <Preview
      title='Form props'
      className='grid grid-cols-4 gap-6'
    >
      <ExampleSelect placeholder='Disabled' disabled/>
      <ExampleSelect placeholder='ReadOnly' readOnly/>
      <ExampleSelect placeholder='Focused' className='Mui-focused'/>
      <ExampleSelect placeholder='Error' error/>
    </Preview>
    <Preview
      title='Input Sizing'
      className='flex justify-center items-center gap-6'
    >
      {SIZING.map(size => (
        <div key={size}>
          <ExampleSelect size={size} placeholder={SIZING_CONFIG[size].label}/>
        </div>
      ))}
    </Preview>
  </div>
);

export default Page;