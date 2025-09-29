import { Routes, Route, useNavigate } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import '@assetsCss/commons.css';
import '@assetsCss/ui.css';
import { MainScreen } from './MainScreen';

const Navigator = () => {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route index path='/' element={<MainScreen />} />
      </Routes>
    </>
  );
};

const RootRouter = () => {
  return (
      <Router>
        <Navigator />
      </Router>
  );
};

export default RootRouter;
