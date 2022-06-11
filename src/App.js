import React from 'react'
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [c1, setC1] = useState('light');
  const [c2, setC2] = useState('light');
  const [c3, setC3] = useState('light');
  const [c, setC] = useState('primary');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => 
  {
    setAlert({
      msg : message,
      type : type
    })   
    setTimeout(() => {
      setAlert(null);
    }, 2000); 
  }

  const toggleMode = () =>
  {
      if(mode==="dark")
      {
          setC1("light");
          setC2("light");
          setC3("light");
          setC("primary");
          setMode("light");
          document.body.style.backgroundColor = 'white';
          showAlert("Light Mode has been enabled","success");
          document.title = "Textutils - Light Mode";
      }
      else
      {
        setC1("dark");
        setC2("dark");
        setC3("dark");
        setC("secondary");
        setMode("dark");
        document.body.style.backgroundColor = '#303030';
        showAlert("Dark Mode has been enabled","success");
        document.title = "Textutils - Dark Mode";
      }
  }

  const color1 = () =>
  {
      setC1("primary");
      setC2("dark");
      setC3("dark");
      setC("primary");
      setMode("dark");
      document.body.style.backgroundColor = '#281b7d';
      showAlert("Blue Mode has been enabled","success");
      document.title = "Textutils - Blue Mode";
  }
  const color2 = () =>
  {
      setC1("dark");
      setC2("danger");
      setC3("dark");
      setC("danger");
      setMode("dark");
      document.body.style.backgroundColor = '#b30000';
      showAlert("Red Mode has been enabled","success");
      document.title = "Textutils - Red Mode";
  }
  const color3 = () =>
  {
    setC1("dark");
    setC2("dark");
    setC3("success");
    setC("success");
    setMode("dark");
    document.body.style.backgroundColor = '#107026';
    showAlert("Green Mode has been enabled","success");
    document.title = "Textutils - Green Mode";
  }
  

  return (
    <>
    {/* <Router> */}
      <Navbar showAlert={showAlert} title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} c1={c1} c2={c2} c3={c3} color1={color1} color2={color2} color3={color3}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} c={c} setC={setC} />

      {/* <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} c={c} setC={setC} />} />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
