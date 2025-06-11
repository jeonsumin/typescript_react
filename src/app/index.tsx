import ReactDOM from 'react-dom/client';
import 'assets/css/commons.css';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AppRouter } from './appRoute/appRouter';
import { ModalProvider } from 'shared/ModalProvider';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </Provider>
  </StrictMode>
);
