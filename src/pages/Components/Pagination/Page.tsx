import {Pagination, Preview} from '../../../Components';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';
import {SIZING} from '../../../@types/Sizing.ts';

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      {VARIANTS.map(variant => (
        <Preview key={variant} title={variant}>
          <div className='flex flex-col items-center justify-center gap-2'>
            {COLORS.map(color => (
              <Pagination
                key={variant + color}
                variant={variant}
                color={color}
              />
            ))}
          </div>
        </Preview>
      ))}
      <Preview title='Outline'>
        <div className='flex flex-col items-center justify-center gap-10'>
          {VARIANTS.map(variant => (
            <Pagination
              key={variant}
              variant={variant}
              outline
            />
          ))}
        </div>
      </Preview>
      <Preview title='Sizing'>
        <div className='flex flex-col items-center justify-center gap-10'>
          {SIZING.map(size => (
            <Pagination key={size} size={size}/>
          ))}
        </div>
      </Preview>
      <Preview title='Simple Previous/Next'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <Pagination pageLess/>
        </div>
      </Preview>
      <Preview title='With icons'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <Pagination square/>
        </div>
      </Preview>
    </div>
  )
}

export default Page