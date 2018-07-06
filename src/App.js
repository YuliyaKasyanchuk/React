import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
     <div className='wrapper'>
     <Hello />
      <SayFullName name='Yuliya-01' surname='Kasyanchuk' link='vk.com' />
      <SayFullName name='Yuliya-02' surname='Kasyanchuk' link='vk.com' />
      <SayFullName name='Yuliy-03' surname='Kasyanchuk' link='vk.com' />
    </div>
    );
  }
}


function Hello(){
  return(
    <div>
      <h1>Hello World! </h1>
    </div>
    )
}
function SayFullName(props){
  return(
    <div>
      <h1> Мое имя - {props.name}, фамилия  - {props.surname} </h1>
      <a href={props.link}>Ссылка на мой профиль</a>
    </div>
    )
}





export default App;
