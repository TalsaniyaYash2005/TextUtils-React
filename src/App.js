import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      
      // setInterval(() => {
      //   document.title = "Install Dark Mode";
      // }, 3700);
      // setInterval(() => {
      //   document.title = "Dark Mode is Amazing";
      // }, 2300);
      // setInterval(() => {
      //   document.title = "Hello! Dark Mode Lover!";
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Navbar title="Yash_Project" home="Yash_Home" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
