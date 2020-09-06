import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BottomContainer from './Components/BottomContainer/BottomContainer'
import router from './routes'
import './reset.css'
import './App.css';
import { MDBAnimation } from "mdbreact";
import ScrollTop from './Components/ScrollTop/ScrollTop'

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollTop/>
      {router}
      <MDBAnimation reveal type='fadeInUp' >
        <BottomContainer/>
        <Footer/>
      </MDBAnimation>
    </div>
  );
}

export default App;
