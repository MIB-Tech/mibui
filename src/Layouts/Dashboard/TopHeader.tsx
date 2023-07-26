import {BellIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon} from '@heroicons/react/20/solid';
import {FC, HTMLAttributes} from 'react';
import * as classNames from 'classnames';
import {Tooltip} from 'flowbite-react';
import {Link} from 'react-router-dom';

const IconButton: FC<HTMLAttributes<HTMLButtonElement>> = ({className, ...props}) => (
  <button
    className={classNames(
      'flex items-center text-sm text-gray-600 hover:text-gray-700 dark:text-white',
      className
    )}
    {...props}
  />
)

export const TopHeader = () => (
  <nav className="bg-gray-50 dark:bg-gray-700 border-b border-inherit">
    <div className="flex items-center flex-wrap justify-between mx-auto max-w-[85%] py-3">
      <Link
        to='/'
        className="flex items-center"
      >
        {/*<img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3" alt="Flowbite Logo"/>*/}
        <span className="self-center font-semibold whitespace-nowrap dark:text-white">
          MIB Tech UI
        </span>
      </Link>
      <div className="flex items-center">
        <IconButton className="mr-5">
          <QuestionMarkCircleIcon className="header-icon me-1"/> Help
        </IconButton>
        <IconButton className="mr-5">
          <Tooltip content="Notifications">
            <BellIcon className="header-icon me-1"/>
          </Tooltip>
        </IconButton>
        <IconButton className="mr-5">
          <Tooltip content="Settings">
            <Cog6ToothIcon className="header-icon me-1"/>
          </Tooltip>
        </IconButton>
        <IconButton className="mr-5">
          <Tooltip content="Profile">
            <UserIcon className="header-icon me-1"/>
          </Tooltip>
        </IconButton>
      </div>
    </div>
  </nav>
)