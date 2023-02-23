

import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
//  import NewTry from './components/NewTry';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';




const App = () => {


  const [mode, setmode] = useState('light')
  const [text, setText] = useState('Enable dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
  }
  setTimeout(() => {
    setAlert(null)
  }, 3000);

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white'
      setText('Enable Light mode')
      showAlert('Dark mode has been enabled', 'primary')

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529'
      setText('Enable Dark mode')
      showAlert('Light mode has been enabled', 'success')

    }
  }



  return (


    <>

<BrowserRouter>

        <NavBar title='TextUtil' hm='Home' abt='About Us' mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          
            <Routes>
              <Route path="/about" element={<About />} />

              <Route path="/Home" element={<TextForm showAlert={showAlert} heading='Enter the text to analyze' toggleMode={toggleMode} />} />
            </Routes>
         


        </div>
        </BrowserRouter>


        {/* <NewTry title='your text here'/> */}
      </>




      );
}

      export default App;
