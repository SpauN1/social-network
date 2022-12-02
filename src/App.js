import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialog" element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
