import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
