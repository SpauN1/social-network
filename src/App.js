import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import './App.css';

function App() {
  const postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 8},
  ];
  const dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Alexey'},
    {id: 5, name: 'Masha'},
    {id: 6, name: 'Sveta'},
  ];
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
  ];
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/profile" element={<Profile postsData={postsData} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogsData={dialogsData} messagesData={messagesData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
