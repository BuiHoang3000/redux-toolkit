import { HeaderOnlyProps } from '~/layouts/HeaderOnly/HeaderOnly';

export type RouteConfig = {
  id: number;
  path: string;
  component: () => JSX.Element;
  layout?: ({ children }: HeaderOnlyProps) => JSX.Element;
};
