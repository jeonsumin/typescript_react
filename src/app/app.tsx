import { createRoot } from 'react-dom/client'
import 'shared/styles/commons.css'
import { AppRouter } from './routes'
import { ModalProvider } from 'shared/lib/modal'
import { StrictMode } from 'react'
import { RouterProvider, StoreProvider } from './provider'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <StoreProvider>
      <ModalProvider>
        <RouterProvider>
          <AppRouter />
        </RouterProvider>
      </ModalProvider>
    </StoreProvider>
  </StrictMode>,
)
