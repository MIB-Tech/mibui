import {Menu, MenuButton, MenuDivider, MenuHeader, MenuItem, MenuMenu, MenuToggle, Preview} from '../../../Components';
import {MenuOptions} from './MenuOptions.tsx';

const Page = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Basic' className='flex justify-center'>
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuOptions/>
          </MenuMenu>
        </Menu>
      </Preview>
      {/*<Preview title="Placement" className="flex justify-center flex-wrap gap-2">*/}
      {/*  {POPUP_PLACEMENTS.map(placement => (*/}
      {/*    <Menu key={placement}>*/}
      {/*      <MenuButton>*/}
      {/*        Dropdown*/}
      {/*      </MenuButton>*/}
      {/*      <MenuMenu>*/}
      {/*        <DropdownOptions/>*/}
      {/*      </MenuMenu>*/}
      {/*    </Menu>*/}
      {/*  ))}*/}
      {/*</Preview>*/}
      <Preview title='Divider' className='flex justify-center'>
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuOptions/>
            <MenuDivider/>
            <MenuItem>Logout</MenuItem>
          </MenuMenu>
        </Menu>
      </Preview>
      <Preview title='Active Option' className='flex justify-center'>
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuOptions/>
            <MenuItem active>Light Mode</MenuItem>
          </MenuMenu>
        </Menu>
      </Preview>
      <Preview title='Disabled Option' className='flex justify-center'>
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuOptions/>
            <MenuItem disabled>AEP (expired)</MenuItem>
          </MenuMenu>
        </Menu>
      </Preview>
      <Preview title='Toggle icon' className='flex justify-center'>
        <Menu>
          <MenuButton withToggleIcon>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuOptions/>
          </MenuMenu>
        </Menu>
      </Preview>
      <Preview title='Header' className='flex justify-center'>
        <Menu>
          <MenuButton>
            Menu
          </MenuButton>
          <MenuMenu>
            <MenuHeader>
              <div className='font-bold'>
                Elfannir Abderrahmane
              </div>
              <a href='#' className='truncate text-sm font-medium hover:text-primary-500 hover:underline'>
                a.elfannir@mibtech.ma
              </a>
            </MenuHeader>
            <MenuOptions/>
          </MenuMenu>
        </Menu>
      </Preview>
      <Preview title='Customer Toggle' className='flex justify-center'>
        <Menu>
          <MenuToggle slots={{root: 'a'}}>
            Custom Toggler
          </MenuToggle>
          <MenuMenu>
            <MenuOptions/>
          </MenuMenu>
        </Menu>
      </Preview>
    </div>
  )
}

export default Page