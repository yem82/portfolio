import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
// import Form from './components/Form';
import './App.scss'

function App() {
  return (
    <div className="background-pic">
    <Fragment >
      <Navbar />
      <About />
      <Technologies />
    </Fragment>
    {/* <div>
      <Form />
    </div> */}
    </div>
  );
}

export default App;
