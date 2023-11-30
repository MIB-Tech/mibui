import {Icon, List, ListItem, Preview} from '../../../Components';
import {HomeIcon, ShoppingBagIcon} from '@heroicons/react/20/solid';

const Page = () => (
  <div className='flex flex-col gap-12'>
    <Preview title='Basic' className='flex justify-center'>
      <List className='bg-white rounded'>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </Preview>
    <Preview title='Custom Item' className='flex justify-center'>
      <List className='bg-white rounded'>
        <ListItem className='flex gap-3'>
          <Icon icon={HomeIcon} size={5}/>
          <div>
            Dashboard
          </div>
        </ListItem>
        <ListItem className='flex gap-3'>
          <Icon icon={ShoppingBagIcon} size={5}/>
          <div>
            E-commerce
          </div>
        </ListItem>
        <ListItem className='flex gap-3' active>
          <Icon icon={ShoppingBagIcon} size={5}/>
          <div>
            E-commerce
          </div>
        </ListItem>
      </List>
    </Preview>
  </div>
);

export default Page;