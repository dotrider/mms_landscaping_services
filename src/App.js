import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BottomContainer from './Components/BottomContainer/BottomContainer'
import router from './routes'
import './reset.css'
import './App.css';
import { MDBAnimation } from "mdbreact";

function App() {
  return (
    <div className="App">
      <Header/>
      {router}
      <MDBAnimation reveal type='fadeInUp' >
        <BottomContainer/>
        <Footer/>
      </MDBAnimation>
    </div>
  );
}

export default App;
