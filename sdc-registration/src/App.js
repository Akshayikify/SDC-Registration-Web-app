import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <header id="headings">
        <h2>Software Development Club</h2>
        <i>Code for future</i>
      </header>
      <RegistrationForm />
      <Timeline />
      <Footer/>
    </>
  );
}

export default App;
