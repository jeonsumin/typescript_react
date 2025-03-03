import { Provider } from 'react-redux'
import { store } from 'shared/lib/store'
import { BrowserRouter } from './RouterProvider'

export function RootProvider() {
  return (
    <Provider store={store}>
      <BrowserRouter />
    </Provider>
  )
}
