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
      <TanStackRouterDevtools initialIsOpen={true} />
    </>
  );
}
const rootRoute = new RootRoute({
  component: Root,
});

// Create an index route
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const wishListRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "wishlists",
  component: Wishlist,
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
