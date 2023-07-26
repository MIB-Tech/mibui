import {RouteType} from '../@types/Route.ts';

export const useRoute = (id: string) => {
  return {
    title: id
  } as RouteType
  // const data = useRouteLoaderData(id)
  //
  // return data as RouteType | undefined
}