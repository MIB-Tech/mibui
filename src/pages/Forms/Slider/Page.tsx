import {Preview} from '../../../Components';
import {SIZING} from '../../../@types/Sizing.ts';
import {COLORS} from '../../../@types/Color.ts';
import {Slider} from '../../../Forms/Slider';
import {DISPLAYS} from '../../../Forms/Slider/Slider.types.tsx';


function Page() {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default'>
        <Slider defaultValue={10}/>
      </Preview>
      <Preview title='Disabled'>
        <Slider defaultValue={10} disabled/>
      </Preview>
      <Preview title='Min & Max'>
        <Slider
          min={5}
          max={110}
          marks={[5, 110].map(value => ({value, label: value}))}
        />
      </Preview>
      <Preview title='Step'>
        <Slider
          step={5}
          marks={[0, 5, 10].map(value => ({value, label: value}))}
        />
      </Preview>
      <Preview title='Sizing' className='gap-y-10'>
        {SIZING.map(size => <Slider key={size} size={size}/>)}
      </Preview>
      <Preview title='Colors' className='gap-y-10'>
        {COLORS.map(color => <Slider key={color} color={color}/>)}
      </Preview>
      <Preview title='Marks'>
        <Slider marks step={5}/>
      </Preview>
      <Preview title='Marks with label'>
        <Slider marks={[0, 25, 50, 75, 100].map(value => ({value, label: value}))}/>
      </Preview>
      <Preview title='Custom label'  className='gap-y-10'>
        {DISPLAYS.map(display => (
          <div key={display} className='text-center'>
            <Slider display={display}/>
            <div className='capitalize'>{display}</div>
          </div>
        ))}
      </Preview>
    </div>
  );
}


export default Page;
