export type RouteConfig = {
  id: number;
  path: string;
  component: () => JSX.Element;
  layout?: ({ children }: any) => JSX.Element;
};
