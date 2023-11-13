import {Preview, Skeleton} from "../../../Components";
import {SHAPES, SKELETON_VARIANTS} from "../../../Components/Skeleton/Skeleton.types.ts";

const Page = () => {
  return (
    <div className='flex flex-col space-y-8 '>
      <Preview className='bg-white' title='Text Size'>
        {SKELETON_VARIANTS.map((variant) => (
          <Skeleton key={variant} variant={variant} className='rounded'/>
        ))}
      </Preview>
      <Preview className='bg-white' title='shape'>
        {SHAPES.map((shape) => (
          <Skeleton key={shape} className='h-10' rounded={shape} />
        ))}
      </Preview>
      <Preview className='bg-white' title='forms'>
          <div className='flex justify-center'>
            <div className='flex flex-col space-y-2 p-16 '>
              <Skeleton className='w-96 h-52 ' rounded='md'/>
              <Skeleton variant='text-xl' className='w-96' rounded='md'/>
              <Skeleton variant='text-xl' className='w-64' rounded='md'/>
            </div>
          </div>
        <div className='inline-flex'>
          <Skeleton rounded='full' className='h-24 w-24 space-x-4'/>
          <div className="flex flex-col space-y-2 pt-6 pl-4">
            <Skeleton variant='text' className='w-96' rounded='md'/>
            <Skeleton variant='text' className='w-1/2' rounded='md'/>
          </div>
        </div>
        <Skeleton className='h-80 w-full'/>
      </Preview>
    </div>
  );
};

export default Page;


