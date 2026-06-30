import { createBrowserRouter } from 'react-router-dom';
import Login from './Features/Auth/pegas/Login';
import Registration from './Features/Auth/pegas/Registration';
import Enteripage from './Features/Auth/pegas/Enteripage';
import Feed from './Features/post/pages/Feed';

export const route = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/',
    element: <Enteripage />,
  },
  {
    path: '/feed',
    element: <Feed/>,
  },
 
]);
