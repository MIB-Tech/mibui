import {BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon} from '@heroicons/react/20/solid';
import {FC, HTMLAttributes} from 'react';
import {twMerge} from 'tailwind-merge';
import {Icon} from '../../Components';

const Tooltip = ({...props}) => {
  return (
    <div {...props} />
  );
};

const IconButton: FC<HTMLAttributes<HTMLButtonElement>> = ({className, ...props}) => (
  <button
    className={twMerge(
      'flex items-center text-sm text-gray-600 hover:text-gray-700',
      className
    )}
    {...props}
  />
);

export const TopHeader = () => {

  return (
    <nav className='flex items-center flex-wrap justify-end mx-auto ml-3 p-2'>
      <div className='flex items-center'>
        <IconButton className='mr-5'>
          <Icon icon={QuestionMarkCircleIcon} className='me-1'/> Help
        </IconButton>
        <IconButton className='mr-5'>
          <Tooltip content='Notifications'>
            <Icon icon={BellIcon} className='me-1'/>
          </Tooltip>
        </IconButton>
        <IconButton className='mr-5'>
          <Tooltip content='Settings'>
            <Icon icon={Cog6ToothIcon} className='me-1'/>
          </Tooltip>
        </IconButton>
        <IconButton className='mr-5'>
          <Tooltip content='Profile'>
            <Icon icon={UserIcon} className='me-1'/>
          </Tooltip>
        </IconButton>
      </div>
    </nav>
  );
};