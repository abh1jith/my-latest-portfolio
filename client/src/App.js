import React from "react";
import  Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  
  
  return (<>
  <Header />
  <Container>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="/contact" element={ <ContactMe /> } />
      <Route path="/about" element={ <AboutMe /> } />
      <Route path="/" element={ <Home /> } />
    </Routes>
    
  </Container>
  <Footer />
  </>);
}

export default App;
