import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

import { SignIn, SignUp, Landing } from '../../pages';

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
        path: 'forum',
        element: <div>Страничка Forum</div>,
      },
    ],
  },
]);
