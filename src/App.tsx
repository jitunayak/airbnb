import { KindeProvider } from '@kinde-oss/kinde-auth-react';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { persistQueryClient } from '@tanstack/react-query-persist-client';
import { RouterProvider } from '@tanstack/react-router';
import React from 'react';

import { IRouter } from './main';

interface IProps {
  router: IRouter;
}
const App: React.FC<IProps> = ({ router }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
        refetchOnReconnect: 'always',
      },
    },
  });

  const localStoragePersister = createSyncStoragePersister({
    storage: window.localStorage,
  });

  persistQueryClient({
    persister: localStoragePersister,
    queryClient,
  });

  return (
    <KindeProvider
      clientId="9f31d731d86b41d4b38dd4988cb9eb42"
      domain="https://airbnb.kinde.com"
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </KindeProvider>
  );
};

export default App;
