import {Preview} from '../../../Components';
import {Textarea, UnstyledTextarea} from '../../../Forms';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview
        title='Unstyled Textarea'
        className='flex justify-center'
      >
        <UnstyledTextarea
          placeholder='Text Textarea'
        />
      </Preview>
      <Preview
        title='Default Textarea'
        className='flex justify-center'
      >
        <Textarea placeholder='Default Textarea'/>
      </Preview>
      <Preview
        title='Min/Max rows'
        className='flex justify-center'
      >
        <Textarea
          placeholder='2 min, 4 max'
          minRows={2}
          maxRows={4}
        />
      </Preview>
      <Preview
        title='Textarea Sizing'
        className='flex justify-center items-center gap-6'
      >
        {SIZING.map(size => (
          <div key={size}>
            <Textarea size={size} placeholder={SIZING_CONFIG[size].label}/>
          </div>
        ))}
      </Preview>
      <Preview
        title='Disabled/Readonly Textarea'
        className='flex justify-center gap-6'
      >
        <Textarea
          placeholder='Disabled Textarea'
          value='Disabled'
          disabled
        />
        <Textarea
          placeholder='Disabled Textarea'
          value='Readonly'
          readOnly
        />
      </Preview>
    </div>
  );
};

export default Page;