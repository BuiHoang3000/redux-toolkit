import { HomePage } from '~/components/HomePage';
import { TodoList } from '~/components/TodoList';
import { RouteConfig } from '~/types/routeType';

const routes = {
  home: '/',
  product: '/product',
};

const publicRoutes: RouteConfig[] = [
  { id: 1, path: routes.home, component: HomePage },
  { id: 2, path: routes.product, component: TodoList },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
