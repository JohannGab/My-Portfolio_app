import React, { useState } from 'react';
import AOS from 'aos';
import Header from './Components/header';
import AboutMe from './Components/aboutMe';
import Contact from './Components/contact';
import Competences from './Components/competences';
import Projets from './Components/projets';
import Footer from './Components/footer';
import Burger from './Components/MenuBurger/burger';
import Menu from './Components/MenuBurger/menu';

import 'aos/dist/aos.css'

function App() {
  const [open, setOpen] = useState(false);

  const openAndClose = () => {
    setOpen(!open)
  }

  AOS.init();
  return (
    <div style={{
        backgroundColor: '#EFF1F1',
        fontFamily: `"Avenir Next", "Avenir", sans-serif`
    }}>
      <Burger open={open} openAndClose={openAndClose}/>
      <Menu open={open} openAndClose={openAndClose} />
      <Header url='home'/>
      <AboutMe url='aboutMe'/>
      <Competences url='competences'/>
      <Projets url='projets'/>
      <Contact url='contact'/>
      <Footer />
    </div>
  );
}

export default App;
