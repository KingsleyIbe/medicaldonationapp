import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import RouterPage from './routerPage';

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <RouterPage />
    </QueryClientProvider>
  );
}

export default App;
