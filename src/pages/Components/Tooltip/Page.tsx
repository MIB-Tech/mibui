import {Button, Preview, Tooltip} from '../../../Components';
import {POPUP_PLACEMENTS} from '../../../Components/Tooltip/Tooltip.tsx';
import {TooltipTrigger} from '../../../Components/Tooltip/Tooltip.types.tsx';

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
        {(['click', 'hover'] as TooltipTrigger[]).map(trigger => (
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
    </div>
  );
};

export default Page