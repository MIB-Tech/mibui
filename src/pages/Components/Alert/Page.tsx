import {Alert, Icon, Preview} from '../../../Components';
import {CheckIcon} from '@heroicons/react/20/solid';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';


const Page = () => (
  <div className='flex flex-col gap-9 capitalize'>
    {VARIANTS.map(variant => (
      <Preview key={variant} title={variant}>
        <div className='flex flex-col gap-2'>
          {COLORS.map(color => (
            <Alert
              key={variant + color}
              variant={variant}
              color={color}
              title={color}
              icon={<Icon icon={CheckIcon} size={5} className='mt-1'/>}
            >
              Change a few things up and try submitting again.
            </Alert>
          ))}
        </div>
      </Preview>
    ))}
    <Preview title='Title & icon' className='flex flex-col gap-2'>
      {VARIANTS.map(variant => (
        <Alert
          key={variant}
          icon={<CheckIcon className='h-5 w-5 mt-1'/>}
          title='Change a few things up and try submitting again.'
          variant={variant}
        />
      ))}
    </Preview>
    <Preview title='Title only' className='flex flex-col gap-2'>
      {VARIANTS.map(variant => (
        <Alert
          key={variant}
          title='Change a few things up and try submitting again.'
          variant={variant}
        />
      ))}
    </Preview>
    <Preview title='Title only' className='flex flex-col gap-2'>
      {VARIANTS.map(variant => (
        <Alert
          key={variant}
          title='Change a few things up and try submitting again.'
          variant={variant}
          dismissible
        />
      ))}
    </Preview>
  </div>
)

export default Page