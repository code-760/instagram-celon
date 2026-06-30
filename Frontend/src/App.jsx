
import { RouterProvider } from 'react-router-dom';
import { route } from './app.routes';
import { AuthProvider } from './Features/Auth/auth.context';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  );
}

export default App;

