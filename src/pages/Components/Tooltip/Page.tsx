import {Button, Preview, Tooltip} from '../../../Components';
import {PopupTrigger} from '../../../Components/Popup/Popup.types.tsx';
import {POPUP_PLACEMENTS} from '../../../Components/Popup/Popup.utils.ts';

const Page = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Preview
        title='Default'
        className='flex justify-center'
      >
        <Tooltip content='Tooltip content'>
          <Button>
            Default Tooltip
          </Button>
        </Tooltip>
      </Preview>
      <Preview
        title='Placement'
        className='grid grid-cols-4 gap-2'
      >
        {POPUP_PLACEMENTS.map(placement => (
          <div key={placement}>
            <Tooltip
              content='Tooltip content'
              placement={placement}
            >
              <Button className='capitalize'>
                {placement.replace('-',' ')}
              </Button>
            </Tooltip>
          </div>
        ))}
      </Preview>
      <Preview
        title='Trigger'
        className='flex justify-center gap-2'
      >
        {(['click', 'hover'] as PopupTrigger[]).map(trigger => (
          <Tooltip
            key={trigger}
            content='Tooltip content'
            trigger={trigger}
          >
            <Button className='capitalize'>
              {trigger}
            </Button>
          </Tooltip>
        ))}
      </Preview>
      <Preview
        title='Html content'
        className='flex justify-center'
      >
        <Tooltip content={<><b>{`HTML `}</b> Tooltip content</>}>
          <Button>
            Default Tooltip
          </Button>
        </Tooltip>
      </Preview>
    </div>
  );
};

export default Page