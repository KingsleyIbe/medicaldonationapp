import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { queries } from '@testing-library/react';
import React from 'react';
import RouterPage from './routerPage';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <RouterPage />
    </QueryClientProvider>
  );
}

export default App;
