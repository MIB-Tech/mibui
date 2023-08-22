import {Button, Dropdown, DropdownMenu, DropdownToggle, Preview} from '../../../Components';
import {Input, InputGroup, InputGroupAddon} from '../../../Forms';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import Icon from '../../../Components/SvgIcon/Icon.tsx';
import {DropdownOptions} from '../../Components/Dropdown/DropdownOptions.tsx';
import {DropdownDirection} from '../../../Components/Dropdown/Dropdown.types.tsx';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';


const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Text Addons' className='flex flex-col gap-2'>
        <InputGroup>
          <InputGroupAddon>https://</InputGroupAddon>
          <Input placeholder='mibtech.ma'/>
        </InputGroup>
        <InputGroup>
          <Input placeholder='username'/>
          <InputGroupAddon>@mibtech.ma</InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <Input placeholder='username'/>
          <InputGroupAddon>@</InputGroupAddon>
          <Input placeholder='mibtech.ma'/>
        </InputGroup>
      </Preview>
      <Preview title='Sizing' className='flex flex-col gap-2'>
        {SIZING.map(size => (
          <InputGroup key={size}>
            <InputGroupAddon>{SIZING_CONFIG[size].label}</InputGroupAddon>
            <Input size={size} placeholder='mibtech.ma'/>
          </InputGroup>
        ))}
      </Preview>
      <Preview title='Icon Addons' className='flex flex-col gap-2'>
        <InputGroup>
          <Input placeholder='Search...'/>
          <InputGroupAddon>
            <Icon icon={MagnifyingGlassIcon}/>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon>
            <Icon icon={MagnifyingGlassIcon}/>
          </InputGroupAddon>
          <Input placeholder="Search..."/>
        </InputGroup>
      </Preview>
      <Preview title="Button Addons" className="flex flex-col gap-2">
        <InputGroup>
          <Button>Action</Button>
          <Input placeholder="Search..."/>
        </InputGroup>
        <InputGroup>
          <Input placeholder="Search..."/>
          <Button>Action</Button>
          <Button>Action</Button>
        </InputGroup>
      </Preview>
      <Preview title="Button with dropdowns" className="flex flex-col gap-2">
        <InputGroup>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-s'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu direction={DropdownDirection.ButtonStart}>
              <DropdownOptions/>
            </DropdownMenu>
          </Dropdown>
          <Input placeholder='Search...'/>
        </InputGroup>
        <InputGroup>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-s'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownOptions/>
            </DropdownMenu>
          </Dropdown>
          <Input placeholder='Search...'/>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu direction={DropdownDirection.ButtonEnd}>
              <DropdownOptions/>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownToggle as={Button} className='rounded-none rounded-e'>
              Dropdown
            </DropdownToggle>
            <DropdownMenu direction={DropdownDirection.ButtonEnd}>
              <DropdownOptions/>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
      </Preview>
    </div>
  )
}

export default Page