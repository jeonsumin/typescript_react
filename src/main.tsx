import { createRoot } from 'react-dom/client';
import Navigator from './screen/Navigator';
import { WebSocketProvider } from './providers/WebSocketProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <Navigator />
);
