import React from 'react';
// import logo from './logo.svg';
import Portfolio from './components/Portfolio'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Timeline from './components/Timeline/Timeline';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  const portfolioLinks = [
    {
      title: 'Threads',
      caption: 'Illustration'
    },
    {
      title: 'Explore',
      caption: 'Graphic Design'
    },
    {
      title: 'Finish',
      caption: 'Identity'
    },
    {
      title: 'Lines',
      caption: 'Branding'
    },
    {
      title: 'Southwest',
      caption: 'Website Design'
    },
    {
      title: 'Window',
      caption: 'Photography'
    },
    {
      title: 'Pizza',
      caption: 'I love pizza!'
    }
  ]

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <Timeline/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
