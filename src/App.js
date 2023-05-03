import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/calculator';
import DisplayQuote from './components/displayQuote';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<DisplayQuote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
