import {Button, Preview} from '../../../Components';
import ButtonGroup from '../../../Components/ButtonGroup/ButtonGroup.tsx';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';
import {SIZING} from '../../../@types/Sizing.ts';

const Page = () => {
  return (
    <div className='flex flex-col gap-12'>
      {VARIANTS.map(variant => (
        <Preview key={variant} title={variant} className='capitalize'>
          <div className='flex flex-col items-center justify-center gap-2'>
            {COLORS.map(color => (
              <ButtonGroup key={color} color={color} variant={variant}>
                <Button>Option 1</Button>
                <Button>Option 2</Button>
                <Button>Option 3</Button>
              </ButtonGroup>
            ))}
          </div>
        </Preview>
      ))}
      <Preview title='Outline' className='capitalize'>
        <div className='flex justify-center gap-10'>
          {VARIANTS.map(variant => (
            <div key={variant} className='flex flex-col justify-center gap-2'>
              {COLORS.map(color => (
                <ButtonGroup key={color} color={color} variant={variant} outline>
                  <Button>Option 1</Button>
                  <Button>Option 2</Button>
                  <Button>Option 3</Button>
                </ButtonGroup>
              ))}
            </div>
          ))}
        </div>
      </Preview>
      <Preview title="Vertical" className="capitalize">
        <div className="flex justify-center gap-10">
          {VARIANTS.map(variant => (
            <ButtonGroup key={variant} variant={variant} vertical>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          ))}
          {VARIANTS.map(variant => (
            <ButtonGroup key={variant} variant={variant} vertical outline>
              <Button>Option 1</Button>
              <Button>Option 2</Button>
              <Button>Option 3</Button>
            </ButtonGroup>
          ))}
        </div>
      </Preview>
      <Preview title='Sizing' className='capitalize'>
        <div className='flex justify-center items-center gap-10'>
          {SIZING.map(size => (
            <div key={size}>
              <ButtonGroup size={size}>
                <Button>Option 1</Button>
                <Button>Option 2</Button>
                <Button>Option 3</Button>
              </ButtonGroup>
            </div>
          ))}
        </div>
      </Preview>
      <Preview title='Active' className='capitalize'>
        <div className='flex justify-center items-center gap-10'>
          <ButtonGroup>
            <Button>Option 1</Button>
            <Button active>Active</Button>
            <Button>Option 3</Button>
          </ButtonGroup>
        </div>
      </Preview>
      <Preview title="Disabled" className="capitalize">
        <div className="flex justify-center items-center gap-10">
          <ButtonGroup>
            <Button>Option 1</Button>
            <Button>Option 2</Button>
            <Button disabled>Disabled</Button>
          </ButtonGroup>
        </div>
      </Preview>
    </div>
  )
}

export default Page