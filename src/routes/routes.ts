import Product from '~/components/Collections';
import { HomePage } from '~/components/HomePage';
import HeaderOnly from '~/layouts/HeaderOnly';
import { RouteConfig } from '~/types/routeType';

const routes = {
  home: '/',
  product: '/product',
};

const publicRoutes: RouteConfig[] = [
  { id: 1, path: routes.home, component: HomePage, layout: HeaderOnly },
  { id: 2, path: routes.product, component: Product },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
