import React from 'react';
import Nav from './components/Nav';
import Home from './components/Hero/Home';
import About from './components/About'; 
import Skills from './components/Skills'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='text-white bg-[#0A0F1F] min-h-screen'>
      <Nav />
      <main>
        <section id="home"><Home /></section> 
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default App;