import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router, RouterProvider } from "@tanstack/react-router";
import React from "react";

interface IProps {
  router: Router;
}
const App: React.FC<IProps> = ({ router }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: "always",
      },
    },
  });
  return (
    <>
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
    </>
  );
};

export default App;
