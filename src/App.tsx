// import './App.css'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeResults from "./components/HomeResults";
import StickyHeader from "./components/StickyHeader";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <KindeProvider
        clientId="9f31d731d86b41d4b38dd4988cb9eb42"
        domain="https://airbnb.kinde.com"
        logoutUri={window.location.origin}
        redirectUri={window.location.origin}
      >
        <QueryClientProvider client={queryClient}>
          <StickyHeader />
          <HomeResults />
        </QueryClientProvider>
      </KindeProvider>
    </>
  );
}

export default App;
