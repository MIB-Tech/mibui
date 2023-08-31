import {Button, Menu, MenuMenu, MenuToggle, Preview} from '../../../Components';
import {Input, InputGroup, InputGroupAddon} from '../../../Forms';
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import Icon from '../../../Components/SvgIcon/Icon.tsx';
import {DropdownOptions} from '../../Components/Dropdown/DropdownOptions.tsx';
import {DropdownDirection} from '../../../Components/Menu/Menu.types.tsx';
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
      <Preview title="Button with menus" className="flex flex-col gap-2">
        <InputGroup>
          <Menu>
            <MenuToggle className='rounded-none rounded-s'>
              Dropdown
            </MenuToggle>
            <MenuMenu direction={DropdownDirection.ButtonStart}>
              <DropdownOptions/>
            </MenuMenu>
          </Menu>
          <Input placeholder='Search...'/>
        </InputGroup>
        <InputGroup>
          <Menu>
            <MenuToggle className='rounded-none rounded-s'>
              Dropdown
            </MenuToggle>
            <MenuMenu>
              <DropdownOptions/>
            </MenuMenu>
          </Menu>
          <Input placeholder='Search...'/>
          <Menu>
            <MenuToggle className='rounded-none'>
              Dropdown
            </MenuToggle>
            <MenuMenu direction={DropdownDirection.ButtonEnd}>
              <DropdownOptions/>
            </MenuMenu>
          </Menu>
          <Menu>
            <MenuToggle className='rounded-none rounded-e'>
              Dropdown
            </MenuToggle>
            <MenuMenu direction={DropdownDirection.ButtonEnd}>
              <DropdownOptions/>
            </MenuMenu>
          </Menu>
        </InputGroup>
      </Preview>
    </div>
  )
}

export default Page