import {Button, Preview} from '../../../Components';
import {Popover} from '../../../Components/Popover';
import {POPUP_PLACEMENTS} from '../../../Components/Tooltip/Tooltip.utils.ts';
import {PopupTrigger} from '../../../Components/Tooltip/Tooltip.types.tsx';

const Page = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Preview title="Default" className="flex justify-center">
        <Popover
          content='Popover content'
          placement='right'
        >
          <Button>Click Me</Button>
        </Popover>
      </Preview>

      <Preview title='Placement' className='grid grid-cols-4 gap-2'>
        {POPUP_PLACEMENTS.map(placement => (
          <div key={placement}>
            <Popover
              content='Popover content'
              placement={placement}
            >
              <Button className='capitalize'>
                {placement.replace('-', ' ')}
              </Button>
            </Popover>
          </div>
        ))}
      </Preview>

      <Preview title='Trigger' className='flex justify-center gap-2'>
        {(['click', 'hover'] as PopupTrigger[]).map(trigger => (
          <Popover
            key={trigger}
            content='Popover content'
            trigger={trigger}
          >
            <Button className='capitalize'>
              {trigger}
            </Button>
          </Popover>
        ))}
      </Preview>

      <Preview title='Html content' className='flex justify-center'>
        <Popover content={<><b>{`HTML `}</b> Popover content</>}>
          <Button>
            Default Popover
          </Button>
        </Popover>
      </Preview>
    </div>
  );
};

export default Page;
