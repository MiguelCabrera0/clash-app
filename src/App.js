import React from 'react';
import AuthProvider from './authetication/AuthProvider';
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <SnackbarProvider>
      <AuthProvider />
    </SnackbarProvider>
  );
}

export default App;
