import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio></Portfolio>
        <Team/>
        <Contact/>
        <Footer/>
      </div>
    </I18nextProvider>
  );
}

export default App;
