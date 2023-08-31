import React from 'react';
import {Preview} from '../../../Components';
import {ModalExample} from './ModalExample.tsx';
import {SIZING, SIZING_CONFIG} from '../../../@types/Sizing.ts';

const Page: React.FC = () => {

  return (
    <div className='flex flex-col gap-12'>
      <Preview title='Default'>
        <ModalExample/>
      </Preview>
      <Preview title='Sizing'>
        <div className='flex items-center justify-center gap-2'>
          {SIZING.map(size => (
            <ModalExample
              key={size}
              size={size}
              buttonLabel={SIZING_CONFIG[size].label}
            />
          ))}
        </div>
      </Preview>
    </div>
  );
};

export default Page;
