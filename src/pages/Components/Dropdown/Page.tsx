import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  PopoverMenu,
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
      <Preview title="Default">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle as={Button}>
              Dropdown
            </DropdownToggle>
            <PopoverMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
      <Preview title="Direction">
        <div className="flex justify-center gap-2">
          {(Object.values(DropdownDirection) as DropdownDirection[]).map(direction => (
            <Dropdown key={direction}>
              <DropdownToggle as={Button} className="capitalize">
                {direction}
              </DropdownToggle>
              <PopoverMenu direction={direction}>
                {DROPDOWN_OPTIONS.map(({label}) => (
                  <DropdownItem key={label}>
                    {label}
                  </DropdownItem>
                ))}
              </PopoverMenu>
            </Dropdown>
          ))}
        </div>
      </Preview>
      <Preview title="Divider">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle as={Button}>
              Dropdown
            </DropdownToggle>
            <PopoverMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
              <DropdownDivider/>
              <DropdownItem>Logout</DropdownItem>
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
      <Preview title="Active Option">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle as={Button}>
              Dropdown
            </DropdownToggle>
            <PopoverMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
              <DropdownItem active>Light Mode</DropdownItem>
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
      <Preview title="Disabled Option">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle as={Button}>
              Dropdown
            </DropdownToggle>
            <PopoverMenu>
              {DROPDOWN_OPTIONS.map(({label}) => (
                <DropdownItem key={label}>
                  {label}
                </DropdownItem>
              ))}
              <DropdownItem disabled>AEP (expired)</DropdownItem>
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
      <Preview title="With Header">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle as={Button}>
              Dropdown
            </DropdownToggle>
            <PopoverMenu>
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
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
      <Preview title="Customer Toggle">
        <div className="flex justify-center">
          <Dropdown>
            <DropdownToggle
              as={(props, context) => {
                console.log(context)
                return <Cog6ToothIcon {...props} className="mr-2 h-5 w-5"/>
              }}
            />
            <PopoverMenu>
              {DROPDOWN_OPTIONS.map(({label, icon}) => (
                <DropdownItem key={label}>
                  {icon}
                  {label}
                </DropdownItem>
              ))}
            </PopoverMenu>
          </Dropdown>
        </div>
      </Preview>
    </div>
  )
}

export default Page