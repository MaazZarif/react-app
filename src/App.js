import './App.css';
import Navbar from './components\'/Navbar';
import Textform from './components\'/Textform';
import Alert from './components\'/Alert';
import About from './components\'/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setalert(null)
    }, 2000)

  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled ", "success")

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled ", "success")

    }

  }
  return (
    <>
      {/* <Navbar title="maaz" abouttext="about text utils" /> */}
      <Router>
        <Navbar title='maaz' mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact0 path="/" element={
              <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            } />
          </Routes>
        </div>
      </Router>
    </>

  );
}


export default App;
