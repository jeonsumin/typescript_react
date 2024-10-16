import ReactDOM from 'react-dom/client';
import 'assets/css/commons.css';
import { Provider } from 'react-redux';
import store from 'store/store';
import Navigate from './views/navigate';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Navigate/>
  </Provider>
);
