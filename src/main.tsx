import { QueryClient } from '@tanstack/react-query';
import { createRouter } from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { routeTree } from './routeTree.gen';

// Create a new router instance
const queryClient = new QueryClient();

// Set up a Router instance
const router = createRouter({
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  // Since we're using React Query, we don't want loader calls to ever be stale
  routeTree,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export type IRouter = typeof router;

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
);
