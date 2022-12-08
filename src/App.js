//import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MostViewed from './pages/MostViewed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import { Fragment } from 'react';
//import Home from './pages/Home';


function App() {
  return (
    <Fragment>
        <NavBar/>
        <Home />
        <MostViewed />
    </Fragment>
  );
}

export default App;
