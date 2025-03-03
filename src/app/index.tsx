import ReactDOM from 'react-dom/client'
import { RootProvider } from './providers'
import './assets/css/commons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RootProvider />,
)
