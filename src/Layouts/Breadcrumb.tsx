import {NavLink, useMatches} from 'react-router-dom';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {Trans} from 'react-i18next';

const Breadcrumb = () => {
  const matches = useMatches();

  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {matches.map((match, index) => (
          <li key={match.id} className="inline-flex items-center">
            <NavLink
              to={match.pathname}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
            >
              {index > 0 && <ArrowRightIcon className="w-3 h-3 text-gray-400 me-2"/>}
              <Trans i18nKey={match.id}/>
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb