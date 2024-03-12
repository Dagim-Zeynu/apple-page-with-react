import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/header/Header'
import './components/header/Header.css'
import Footer from "./components/footer/Footer"
import './components/footer/Footer.css'
import Section from './components/section/Section'
import './components/section/Section.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Section />
    <Footer />
    
  </React.StrictMode>
);


