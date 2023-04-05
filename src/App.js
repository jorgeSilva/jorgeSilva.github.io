import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LazyLoad from './components/LazyLoad/LazyLoad';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route key={Router.pathname} path='/' element={<LazyLoad/>}/>
            <Route key={Router.pathname} path='home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
