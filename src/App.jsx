import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Home />} />
          <Route path="app/detail/:id" element={<Detail />} />
        </Routes>
    </>
  );
};

export default App;
