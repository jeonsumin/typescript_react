import { createRoot } from 'react-dom/client';
import 'shared/styles/commons.css'
import { Provider } from 'react-redux'
import { AppRotes } from './routes/app-router'
import { store } from './store'
import { ModalProvider } from 'shared/lib/modal'
import { StrictMode } from 'react'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <AppRotes />
      </ModalProvider>
    </Provider>
  </StrictMode>,
)
