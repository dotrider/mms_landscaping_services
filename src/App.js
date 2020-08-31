import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import AboutContainer from './Components/AboutContainer/AboutContainer'
import router from './routes'
import './reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      {router}
      <AboutContainer/>
      <Footer/>
    </div>
  );
}

export default App;
