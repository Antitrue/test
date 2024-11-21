import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, MainRoutes } from './app';
import { store } from './shared/services/store/store';

import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={MainRoutes} />
    </ThemeProvider>
  </Provider>
);
