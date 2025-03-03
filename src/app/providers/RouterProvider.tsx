import { Layout, Main, About } from 'pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export function BrowserRouter() {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
])
