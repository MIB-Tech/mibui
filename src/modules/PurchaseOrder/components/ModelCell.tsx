import {FC} from 'react';
import {HydraItem} from '../../types.ts';
import {Link, LinkProps} from 'react-router-dom';
import {ButtonProps} from '../../../Components/Button/Button.types.tsx';

export const ModelCell: FC<{ item: HydraItem } & {
  slotProps?: { title?: Partial<LinkProps> & Pick<ButtonProps, 'disabled'> }
}> = (
  {item, slotProps, ...props}
) => (
  <div {...props}>
    <div className='text-gray-400'>
      {item['@subTitle']}
    </div>
    {slotProps?.title?.disabled ?
      <span {...slotProps?.title}>
        {item['@title']}
      </span> :
      <Link
        to={item['@id']}
        {...slotProps?.title}
        className='text-primary-600 hover:underline'
      >
        {item['@title']}
      </Link>
    }
  </div>
);