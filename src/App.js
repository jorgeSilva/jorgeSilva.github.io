import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LazyLoad from './components/LazyLoad/LazyLoad';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LazyLoad/>}/>
          <Route path='home' element={<Home/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
