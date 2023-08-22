import {Preview} from '../../../Components';
import {InputPassword} from '../../../Forms';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default'>
        <InputPassword/>
      </Preview>
      <Preview title='Sizing' className='flex flex-col gap-2'>
        {SIZING.map(size=>(
          <InputPassword
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