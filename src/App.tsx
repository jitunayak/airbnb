// import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeResults from "./components/HomeResults";
import StickyHeader from "./components/StickyHeader";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StickyHeader />
        <HomeResults />
      </QueryClientProvider>
    </>
  );
}

export default App;
