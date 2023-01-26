import { QueryClient, QueryClientProvider } from "react-query";

import { Posts } from "./components/Posts/Posts";
import "./App.scss";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}

export default App;
