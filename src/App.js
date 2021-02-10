import React from 'react';
import { Switch } from "react-router-dom";



// components
import Header from './components/Header';
import Main from './components/main';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import MakeDiff from './components/MakeDiff';

import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <WhyUs />
      <MakeDiff />
      <Footer />
    </div>
  );
}

export default App;
