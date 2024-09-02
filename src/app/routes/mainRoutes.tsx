import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Landing } from '../../pages';

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
        element: <div>Страничка Авторизации</div>,
      },
      {
        path: 'forum',
        element: <div>Страничка Forum</div>,
      },
    ],
  },
]);
