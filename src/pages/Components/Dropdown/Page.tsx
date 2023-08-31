import {
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownToggle,
  Preview
} from '../../../Components';
import {DropdownDirection} from '../../../Components/Dropdown/Dropdown.types.tsx';
import {Cog6ToothIcon} from '@heroicons/react/24/solid';
import DropdownHeader from '../../../Components/Dropdown/Dropdown.Header.tsx';
import {DropdownOptions} from './DropdownOptions.tsx';
import DropdownMenu from "../../../Components/Dropdown/Dropdown.Menu.tsx";

const Page = () => {

  return (
    <div className="flex flex-col gap-12">
      <Preview title="Default" className="flex justify-center">
        <Dropdown>
          <DropdownToggle as={Button}>
            Dropdown
          </DropdownToggle>
          <DropdownMenu>
            <DropdownOptions/>
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
              <DropdownOptions/>
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
            <DropdownOptions/>
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
            <DropdownOptions/>
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
            <DropdownOptions/>
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
              <div className='font-bold'>
                Elfannir Abderrahmane
              </div>
              <a href='#' className='truncate text-sm font-medium hover:text-primary-500 hover:underline'>
                a.elfannir@mibtech.ma
              </a>
            </DropdownHeader>
            <DropdownOptions/>
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
            <DropdownOptions/>
          </DropdownMenu>
        </Dropdown>
      </Preview>
    </div>
  )
}

export default Page