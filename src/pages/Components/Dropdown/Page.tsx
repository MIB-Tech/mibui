import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Preview
} from '../../../Components';
import {DropdownDirection} from '../../../Components/Dropdown/Dropdown.types.tsx';
import {ChatBubbleLeftIcon, ClipboardIcon, Cog6ToothIcon} from '@heroicons/react/24/solid';
import {ReactNode} from 'react';
import DropdownHeader from '../../../Components/Dropdown/Dropdown.Header.tsx';

export const DROPDOWN_OPTIONS: Array<{ label: string, icon?: ReactNode }> = [
  {
    label: 'Account Settings', icon: <Cog6ToothIcon className="mr-2 h-5 w-5"/>
  },
  {
    label: 'Support', icon: <ChatBubbleLeftIcon className="mr-2 h-5 w-5"/>
  },
  {
    label: 'License', icon: <ClipboardIcon className="mr-2 h-5 w-5"/>
  }
]
const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Default" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({label}) => (
              <DropdownItem key={label}>
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </Preview>
      <Preview title="Direction" className="flex justify-center gap-2">
        {(Object.values(DropdownDirection) as DropdownDirection[]).map(direction => (
          <Dropdown key={direction}>
            <DropdownToggle as={Button} className="capitalize">
              {direction}
            </DropdownToggle>
            <DropdownMenu direction={direction}>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
      </Preview>
      <Preview title="Divider" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({label}) => (
              <DropdownItem key={label}>
                {label}
              </DropdownItem>
            ))}
            <DropdownDivider/>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Preview>
      <Preview title="Active Option" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({label}) => (
              <DropdownItem key={label}>
                {label}
              </DropdownItem>
            ))}
            <DropdownItem active>Light Mode</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Preview>
      <Preview title="Disabled Option" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({label}) => (
              <DropdownItem key={label}>
                {label}
              </DropdownItem>
            ))}
            <DropdownItem disabled>AEP (expired)</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Preview>
      <Preview title="With Header" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownHeader>
              <div className="font-bold">
                Bonnie Green
              </div>
              <a href='#' className="truncate text-sm font-medium hover:text-primary-500 hover:underline">
                bonnie@flowbite.com
              </a>
            </DropdownHeader>
            {DROPDOWN_OPTIONS.map(({label, icon}) => (
              <DropdownItem key={label}>
                {icon}
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </Preview>
      <Preview title="Customer Toggle" className="flex justify-center">
        <Dropdown>
          <DropdownToggle
            as={(props, context) => {
              console.log(context)
              return <Cog6ToothIcon {...props} className="mr-2 h-5 w-5"/>
            }}
          />
          <DropdownMenu>
            {DROPDOWN_OPTIONS.map(({label, icon}) => (
              <DropdownItem key={label}>
                {icon}
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </Preview>
    </div>
  )
}

export default Page