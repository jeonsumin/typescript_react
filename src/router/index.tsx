import { createHashRouter } from 'react-router-dom';
import { Navigate, Main, About } from 'views';

export const router = createHashRouter([
  {
    path: '/',
    element: <Navigate />,
    children: [
      // Navigate.tsx에 Outlet으로 출력
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
  },
]);
