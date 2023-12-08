import {Badge, Preview} from '../../../Components';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      {VARIANTS.map(variant => (
        <Preview key={variant} title={variant}>
          <div className='flex justify-center gap-2'>
            {COLORS.map(color => (
              <Badge
                key={variant + color}
                variant={variant}
                color={color}
                className='capitalize'
              >
                {color}
              </Badge>
            ))}
          </div>
        </Preview>
      ))}
      <Preview title='Size'>
        <div className='flex items-center justify-center gap-2'>
          {SIZING.map(size => (
            <Badge key={size} size={size}>
              {SIZING_CONFIG[size].label}
            </Badge>
          ))}
        </div>
      </Preview>
      <Preview title='With closing'>
        <div className='flex items-center justify-center gap-2'>
          {SIZING.map(size => (
            <Badge
              key={size}
              size={size}
              closable
              onClose={() => alert('You clicked on badge\'s closing icon')}
            >
              {SIZING_CONFIG[size].label}
            </Badge>
          ))}
        </div>
      </Preview>
    </div>
  );
};

export default Page;