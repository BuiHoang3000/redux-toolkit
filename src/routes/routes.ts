import Collections from '~/components/Collections';
import { HomePage } from '~/components/HomePage';
import ProductDetail from '~/components/Product';
import TreePlan from '~/components/TreePlan';
import HeaderOnly from '~/layouts/HeaderOnly';
import { RouteConfig } from '~/types/routeType';

const routes = {
  home: '/',
  product: '/product',
  productDetail: '/product/detail',
  test: '/tree',
};

const publicRoutes: RouteConfig[] = [
  { id: 1, path: routes.home, component: HomePage, layout: HeaderOnly },
  { id: 2, path: routes.product, component: Collections },
  {
    id: 3,
    path: routes.productDetail,
    component: ProductDetail,
    layout: HeaderOnly,
  },
  {
    id: 4,
    path: routes.test,
    component: TreePlan,
    layout: HeaderOnly,
  },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
