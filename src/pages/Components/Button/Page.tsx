import {Preview} from '../../../Components/Preview';
import {Button} from '../../../Components';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const Page = () => {
  return (
    <div>
      <div className='flex flex-col gap-12'>
        {VARIANTS.map(variant => (
          <Preview key={variant} title={variant} className='capitalize'>
            <div className='flex justify-center gap-2'>
              {COLORS.map(color => (
                <Button
                  key={variant + color}
                  variant={variant}
                  color={color}
                  className='capitalize'
                >
                  {color}
                </Button>
              ))}
            </div>
          </Preview>
        ))}

        <Preview title="Outline" className="capitalize">
          <div className="flex justify-center gap-2">
            {VARIANTS.map(variant => (
              <Button
                key={variant}
                variant={variant}
                className='capitalize'
                outline
              >
                {variant}
              </Button>
            ))}
          </div>
        </Preview>

        <Preview title='Sizing' className='capitalize'>
          <div className='flex items-center justify-center gap-2'>
            {SIZING.map(size => (
              <Button key={size} size={size}>
                {SIZING_CONFIG[size].label}
              </Button>
            ))}
          </div>
        </Preview>
        <Preview title='Disbaled' className='capitalize'>
          <div className='flex justify-center gap-2'>
            {VARIANTS.map(variant => (
              <Button
                key={variant}
                variant={variant}
                className='capitalize'
                disabled
              >
                {variant}
              </Button>
            ))}
          </div>
        </Preview>
        <Preview title="Active" className="capitalize">
          <div className="flex items-center justify-center gap-2">
            <Button active>
              Active
            </Button>
          </div>
        </Preview>
        <Preview title="Loading" className="capitalize">
          <div className="flex items-center justify-center gap-2">
            <Button className="capitalize" loading>
              Loading
            </Button>
          </div>
        </Preview>
      </div>
    </div>
  )
}

export default Page