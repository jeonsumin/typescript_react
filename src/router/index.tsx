import { createBrowserRouter } from 'react-router-dom';
import About from 'views/About';
import Login from 'views/Login';
import Main from 'views/Main';
import Root from 'views/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // Root.tsx에 Outlet으로 출력
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
