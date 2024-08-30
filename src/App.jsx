import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import { UserStorage } from './context/UserContext';

import './assets/css/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
