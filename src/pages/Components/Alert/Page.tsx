import {Alert, Icon, Preview} from '../../../Components';
import {CheckIcon} from '@heroicons/react/20/solid';
import {COLORS} from '../../../@types/Color.ts';
import {VARIANTS} from '../../../@types/Variant.ts';


const Page = () => {

  return (<>
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
                <p>le contenu de l'alerte.</p>
              </Alert>
            ))}
          </div>
        </Preview>))
      }
      <Preview title={'title & icon'}>
        <div className='flex flex-col gap-2'>
          <Alert
            color={'primary'}
            icon={<CheckIcon className='h-5 w-5 mt-1'/>}
            title={'Title & icon'}
            variant='solid'
          />
          <Alert
            color={'primary'}
            icon={<CheckIcon className='h-5 w-5 mt-1'/>}
            title={'Title & icon'}
            variant='light'
          />

          <Alert
            color={'primary'}
            icon={<CheckIcon className='h-5 w-5 mt-1'/>}
            title={'title & icon'}
            variant='clean'
          />
        </div>
      </Preview>
      <Preview title={'title only'}>
        <div className='flex flex-col gap-2'>
          <Alert
            color={'primary'}
            title={'Title Only'}
            variant='solid'
          />
          <Alert
            color={'primary'}
            title={'Title nly'}
            variant='light'
          />

          <Alert
            color={'primary'}
            title={'Title Only'}
            variant='clean'
          />
        </div>
      </Preview>
      <Preview title={'dismiss button'}>
        <div className='flex flex-col gap-2'>
          <Alert
            color={'primary'}
            title={'Dismiss Button'}
            variant='solid'
            dismissible

          />
          <Alert
            color={'primary'}
            title={'Dismiss Button'}
            variant='light'
            dismissible
          />

          <Alert
            color={'primary'}
            title={'Dismiss Button'}
            variant='clean'
            dismissible

          />
        </div>
      </Preview>
        </div>
    </>)
}

export default Page