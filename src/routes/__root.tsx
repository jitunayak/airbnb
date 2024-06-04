import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      {/* header accrossall routes can be here */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
