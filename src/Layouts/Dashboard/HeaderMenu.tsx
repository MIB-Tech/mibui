import {twMerge} from 'tailwind-merge';
import {useMatch, useNavigate} from 'react-router-dom';
import {Popup} from '../../Components/Popup';
import {Trans} from 'react-i18next';
import {Button, Card, Icon} from '../../Components';
import {ArrowRightIcon, ChevronDownIcon} from '@heroicons/react/20/solid';
import {FC, useState} from 'react';
import {AgnosticRouteObject} from '@remix-run/router/dist/utils';
import {ButtonProps} from '../../Components/Button/Button.types.tsx';
import {PRIVATE_ROUTES} from '../../pages';

const MegaMenuItem: FC<Pick<AgnosticRouteObject, 'id' | 'path'> & Pick<ButtonProps, 'onClick'>> = (
  {
    id,
    path = '/',
    ...props
  }
) => {

  const navigate = useNavigate();
  const match = useMatch({path, end: false});
  const isActive = !!match;

  return (
    <Button
      color='secondary'
      className={twMerge(
        'group flex items-center justify-between w-44',
      )}
      active={isActive}
      onClick={e => {
        props.onClick?.(e);
        navigate(path);
      }}
    >
      <Trans i18nKey={id} className='truncate '/>
      <Icon icon={ArrowRightIcon} className='hidden group-hover:block'/>
    </Button>
  );
};

const HeaderMenuItem: FC<AgnosticRouteObject> = ({id, path = '/', children}) => {
  const [open, setOpen] = useState<boolean>();
  const hasChild = !!children?.length;
  const match = useMatch({path, end: false});
  const isActive = !!match;

  return (
    <Popup
      key={id}
      open={open}
      setOpen={setOpen}
      trigger='click'
      placement='bottom-start'
      content={(
        <Card
          className='p-3'
          header={<span className='text-gray-500'>{<Trans i18nKey={id}/>}</span>}
        >
          <div className='grid grid-rows-6 grid-flow-col gap-x-3 gap-y-1'>
            {children?.map(childRoute => (
              <MegaMenuItem
                key={childRoute.id}
                id={childRoute.id}
                path={`${path}/${childRoute.path}`}
                onClick={() => {
                  setOpen(false);
                }}
              />
            ))}
          </div>
        </Card>
      )}
    >
      <Button
        color='secondary'
        activeColor='primary'
        className={twMerge(
          'flex px-3 py-0.5 truncate',
          isActive && 'active',
          'items-center',
        )}
        active={isActive}
        onClick={() => {
          setOpen(true);
        }}
      >
        <Trans i18nKey={id}/>
        {hasChild && <Icon icon={ChevronDownIcon}/>}
      </Button>
    </Popup>
  );
};


export const HeaderMenu = () => {
  const routes = PRIVATE_ROUTES.children;

  return (
    <nav className=''>
      <nav className='max-w-[85%] py-2 mx-auto'>
        <div className='flex items-center'>
          <div className='flex flex-row font-medium mt-0 mr-6 space-x-1'>
            {routes?.map(route => (
              <HeaderMenuItem
                key={route.id}
                {...route}
              />
            ))}
          </div>
        </div>
      </nav>
    </nav>
  );
}