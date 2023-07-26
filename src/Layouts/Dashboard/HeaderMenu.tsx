import {router} from '../../main.tsx';
import {MenuItem} from './MenuItem.tsx';

// const ROUTES = Array.from(Array(10).keys()).map(index=>({
//   id: index,
//   pathname: `menu-${index}`,
//   title: `Menu ${index}`,
// }))


export const HeaderMenu = () => {
  const routes = router.routes[0].children

  return (
    <nav className="bg-white dark:bg-gray-90 border-b border-gray-200">
      <div className="max-w-[85%] py-2 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 mr-6 space-x-1">
            {routes?.map((route, id) => (
              <li key={id}>
                <MenuItem route={route}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}