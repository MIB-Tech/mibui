import React from 'react';
import Toast from '../../../Components/Toast/Toast.tsx';
import Preview from '../../../Components/Preview/Preview.tsx';
import {ToastPosition} from 'react-hot-toast';
import {Button, Icon} from '../../../Components';
import {notify} from '../../../Components/Toast/Toast.utils.tsx';
import {CheckIcon} from '@heroicons/react/20/solid';

import {COLORS} from '../../../@types/Color.ts';

const Page: React.FC = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default' className='flex items-center justify-center gap-2'>
        <Button
          onClick={() =>
            notify({title: `here's your toast`})
          }
        >
          Make me a toast
        </Button>
      </Preview>
      <Preview title='Dismissible' className='flex items-center justify-center gap-2'>
        <Button
          onClick={() =>
            notify({
                title: `Dismissible`,
                dismissible: true
              }
            )
          }
        >
          Dismissible
        </Button>
      </Preview>
      <Preview title='With icon' className='flex items-center justify-center gap-2'>
        <Button
          onClick={() =>
            notify({
                title: `With icon`,
                icon: <Icon icon={CheckIcon} size={5} className='mt-1'/>
              }
            )
          }
        >
          With icon
        </Button>
      </Preview>
      <Preview title='Positions' className='flex items-center justify-center gap-2'>
        {['top', 'bottom'].map(vertical => {

          return ['left', 'center', 'right'].map(horizontal => {
            const position = `${vertical}-${horizontal}` as ToastPosition;

            return (
              <Button
                key={position}
                className='capitalize'
                onClick={() =>
                  notify({
                    title: `${position} toast`,
                    position,
                  })
                }
              >
                {position.replace('-', ' ')}
              </Button>
            );
          });
        })}
      </Preview>
      <Preview title='Duration' className='flex items-center justify-center gap-2'>
        {[1, 3, 10].map(durationPerSec => {
          const title = `${durationPerSec} second`;

          return (
            <Button
              key={durationPerSec}
              onClick={() =>
                notify({
                  title,
                  duration: durationPerSec * 1000
                })
              }>
              {title}
            </Button>
          );
        })}
      </Preview>
      <Preview title='Colors' className='grid gap-4 grid-cols-2'>
        {COLORS.map(color => (
          <Toast
            title={`${color} Toast`}
            color={color}
          />
        ))}
      </Preview>
    </div>
  );
};
export default Page;
