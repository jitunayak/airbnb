/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as RoomsRoomIdImport } from './routes/rooms/$roomId'

// Create Virtual Routes

const WishlistsLazyImport = createFileRoute('/wishlists')()
const ProfileIndexLazyImport = createFileRoute('/profile/')()
const HostingIndexLazyImport = createFileRoute('/hosting/')()
const ProfileBookingsIndexLazyImport = createFileRoute('/profile/bookings/')()
const HostingListingIndexLazyImport = createFileRoute('/hosting/listing/')()
const ProfileBookingsBookingIdLazyImport = createFileRoute(
  '/profile/bookings/$bookingId',
)()

// Create/Update Routes

const WishlistsLazyRoute = WishlistsLazyImport.update({
  path: '/wishlists',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/wishlists.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexLazyRoute = ProfileIndexLazyImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile/index.lazy').then((d) => d.Route))

const HostingIndexLazyRoute = HostingIndexLazyImport.update({
  path: '/hosting/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/hosting/index.lazy').then((d) => d.Route))

const RoomsRoomIdRoute = RoomsRoomIdImport.update({
  path: '/rooms/$roomId',
  getParentRoute: () => rootRoute,
} as any)

const ProfileBookingsIndexLazyRoute = ProfileBookingsIndexLazyImport.update({
  path: '/profile/bookings/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/profile/bookings/index.lazy').then((d) => d.Route),
)

const HostingListingIndexLazyRoute = HostingListingIndexLazyImport.update({
  path: '/hosting/listing/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/hosting/listing/index.lazy').then((d) => d.Route),
)

const ProfileBookingsBookingIdLazyRoute =
  ProfileBookingsBookingIdLazyImport.update({
    path: '/profile/bookings/$bookingId',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/profile/bookings/$bookingId.lazy').then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/wishlists': {
      id: '/wishlists'
      path: '/wishlists'
      fullPath: '/wishlists'
      preLoaderRoute: typeof WishlistsLazyImport
      parentRoute: typeof rootRoute
    }
    '/rooms/$roomId': {
      id: '/rooms/$roomId'
      path: '/rooms/$roomId'
      fullPath: '/rooms/$roomId'
      preLoaderRoute: typeof RoomsRoomIdImport
      parentRoute: typeof rootRoute
    }
    '/hosting/': {
      id: '/hosting/'
      path: '/hosting'
      fullPath: '/hosting'
      preLoaderRoute: typeof HostingIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/bookings/$bookingId': {
      id: '/profile/bookings/$bookingId'
      path: '/profile/bookings/$bookingId'
      fullPath: '/profile/bookings/$bookingId'
      preLoaderRoute: typeof ProfileBookingsBookingIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/hosting/listing/': {
      id: '/hosting/listing/'
      path: '/hosting/listing'
      fullPath: '/hosting/listing'
      preLoaderRoute: typeof HostingListingIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/bookings/': {
      id: '/profile/bookings/'
      path: '/profile/bookings'
      fullPath: '/profile/bookings'
      preLoaderRoute: typeof ProfileBookingsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  WishlistsLazyRoute,
  RoomsRoomIdRoute,
  HostingIndexLazyRoute,
  ProfileIndexLazyRoute,
  ProfileBookingsBookingIdLazyRoute,
  HostingListingIndexLazyRoute,
  ProfileBookingsIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/wishlists",
        "/rooms/$roomId",
        "/hosting/",
        "/profile/",
        "/profile/bookings/$bookingId",
        "/hosting/listing/",
        "/profile/bookings/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/wishlists": {
      "filePath": "wishlists.lazy.tsx"
    },
    "/rooms/$roomId": {
      "filePath": "rooms/$roomId.tsx"
    },
    "/hosting/": {
      "filePath": "hosting/index.lazy.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.lazy.tsx"
    },
    "/profile/bookings/$bookingId": {
      "filePath": "profile/bookings/$bookingId.lazy.tsx"
    },
    "/hosting/listing/": {
      "filePath": "hosting/listing/index.lazy.tsx"
    },
    "/profile/bookings/": {
      "filePath": "profile/bookings/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
