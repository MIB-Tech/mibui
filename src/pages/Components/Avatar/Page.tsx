import {Avatar, Preview} from '../../../Components';
import {SIZING} from '../../../Components/Avatar/Avatar.types.ts';

const IMAGE_URL = '/cartoon-avatar-of-smiling-beard-man-profile-icon-vector.jpg';

const Page = () => (
  <div className='flex-col space-y-8'>
    <Preview title='Default' className='flex items-center justify-center bg-white'>
      <Avatar src={IMAGE_URL}/>
    </Preview>
    <Preview title='Placeholder' className='flex items-center justify-center bg-white'>
      <Avatar placeholder='MB'/>
    </Preview>
    <Preview title='Shape' className='flex items-center justify-center bg-white gap-6'>
      <Avatar src={IMAGE_URL} className='rounded-none'/>
      <Avatar src={IMAGE_URL}/>
      <Avatar src={IMAGE_URL} className='rounded-md'/>
      <Avatar src={IMAGE_URL} className='rounded-lg'/>
      <Avatar src={IMAGE_URL} className='rounded-full'/>
    </Preview>
    <Preview title='Sizing' className='bg-white'>
      {SIZING.map(size => (
        <div key={size} className='flex justify-center space-x-4'>
          <Avatar size={size} placeholder='mb'/>
          <Avatar size={size} src={IMAGE_URL}/>
        </div>
      ))}
    </Preview>
  </div>
);
export default Page;

