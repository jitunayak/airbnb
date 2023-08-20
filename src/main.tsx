import { Outlet, RootRoute, Route, Router } from "@tanstack/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Home from "./components/Home.tsx";
import Wishlist from "./components/Wishlists.tsx";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </>
  );
}
const rootRoute = new RootRoute({
  component: Root,
});

// Create an index route
const indexRoute = new Route({
  component: Home,
  getParentRoute: () => rootRoute,
  path: "/",
});

export const wishListRoute = new Route({
  component: Wishlist,
  getParentRoute: () => rootRoute,
  path: "wishlists",
});

const routeTree = rootRoute.addChildren([indexRoute, wishListRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
