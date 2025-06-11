import ReactDOM from 'react-dom/client'
import 'shared/styles/commons.css'
import { Provider } from 'react-redux'
import { AppRotes } from './routes/AppRoutes.tsx'
import { store } from 'store'
import { ModalProvider } from './providers/modal'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <ModalProvider>
      <AppRotes />
    </ModalProvider>
  </Provider>,
)
