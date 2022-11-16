import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar';
import Quotes from './pages/Quotes';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
