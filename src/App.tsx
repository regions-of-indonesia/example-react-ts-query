import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from "./layouts";

import Demo from "./Demo";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="Regions of Indonesia" subtitle="React Query Typescript">
        <Demo />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
