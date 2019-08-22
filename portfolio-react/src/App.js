import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.scss'
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <About />
    <div>
      <Form />
    </div>
    </div>
  );
}

export default App;
