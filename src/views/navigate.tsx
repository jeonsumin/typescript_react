import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';

export default function Navigate() {
  return (
    <>
      {/*<Outlet />*/}
      <Router>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
          <Route path={"/about"} element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}
