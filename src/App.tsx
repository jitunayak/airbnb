// import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryActionBar from "./components/CategoryActionBar";
import Header from "./components/Header";
import HomeResults from "./components/HomeResults";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <CategoryActionBar />
        <HomeResults />
      </QueryClientProvider>
    </>
  );
}

export default App;
