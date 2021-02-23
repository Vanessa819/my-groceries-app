/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header'
import Container from "./Container"

import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <Header/>
        <Container/>
      </div>
      
    )
    }
  }

export default App

