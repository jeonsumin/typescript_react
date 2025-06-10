import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Main} from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="/"/>
      </Routes>
    </BrowserRouter>
  );
};
