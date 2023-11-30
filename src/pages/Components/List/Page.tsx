import {List, ListItem, Preview} from '../../../Components';

const Page = () => (
  <div className='flex flex-col gap-12'>
    <Preview title='Basic' className='flex justify-center'>
      <List className='bg-white rounded'>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>
    </Preview>
  </div>
);

export default Page;