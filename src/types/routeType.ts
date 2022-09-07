export type RouteConfig = {
  id: number;
  path: string;
  component: () => JSX.Element;
};
