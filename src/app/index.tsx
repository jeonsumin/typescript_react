import ReactDOM from 'react-dom/client';
import 'assets/css/commons.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
