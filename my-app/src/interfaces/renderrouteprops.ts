export interface renderRouteProps {
    path: any;
    element: any;
    title: string;
    layout?: 'app' | 'none';  // 'app' = with navbar, 'none' = no layout
}