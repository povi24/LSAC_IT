//import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './parts/Home';
import MostViewed from './parts/MostViewed';
import Footer from './parts/Footer';
import Middle from "./parts/Middle";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
        <NavBar/>
        <Home />
        <Middle />
        <MostViewed />
        <Footer />
    </Fragment>
  );
}

export default App;
