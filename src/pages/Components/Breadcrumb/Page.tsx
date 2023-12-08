import {Breadcrumb, Preview} from '../../../Components';
import {useMatches} from 'react-router-dom';
import {Trans} from 'react-i18next';
import BreadcrumbItem from '../../../Components/Breadcrumb/Breadcrumb.Item.tsx';

const Page = () => {
  const matches = useMatches();

  return (
    <>
      <Preview title='Default'>
        <div className='flex justify-center'>
          <Breadcrumb>
            {matches.map(match=>(
              <BreadcrumbItem to={match.pathname} key={match.id}>
                <Trans i18nKey={match.id}/>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </div>
      </Preview>
    </>
  )
}

export default Page