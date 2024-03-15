import { Outlet, RootRoute, Route, Router } from "@tanstack/router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";
import RoomPage from "./pages/RoomPage.tsx";
import Wishlist from "./pages/Wishlists.tsx";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Outlet />
      <TanStackRouterDevtools initialIsOpen={false} />
    </div>
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

export const roomsRoute = new Route({
  component: RoomPage,
  getParentRoute: () => rootRoute,
  path: "rooms",
});
export const roomRoute = new Route({
  component: RoomPage,
  getParentRoute: () => roomsRoute,
  path: "$roomId",
});
const routeTree = rootRoute.addChildren([
  indexRoute,
  wishListRoute,
  roomsRoute.addChildren([roomRoute]),
]);

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
