import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Form from './components/Form';
import './App.scss'

function App() {
  return (
    <div className="background-pic">
    <Fragment >
      <Navbar />
      <About />
      <Technologies />
      <Projects />
    </Fragment>
    <Fragment >
      <Form />
    </Fragment>
    </div>
  );
}

export default App;
