import ReactDOM from 'react-dom/client';
import 'assets/css/commons.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AppRouter } from './appRoute/appRouter';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
