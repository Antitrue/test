import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Forum from '../../widgets/Forum/Forum';

import { SignIn, SignUp, Landing, Client, Profile, Admin, Manager, Doctor } from '../../pages';

export const MainRoutes = createBrowserRouter([
  {
    errorElement: <div>Страница не найдена!</div>,
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'forum',
        element: <Forum />,
      },
      {
        path: 'client',
        element: <Client />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'manager',
        element: <Manager />,
      },
      {
        path: 'doctor',
        element: <Doctor />,
      },
    ],
  },
]);
