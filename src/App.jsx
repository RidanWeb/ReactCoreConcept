import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import Actor from './Actor'
import './App.css'

function App() {

  const Players = ['Anin Khan', 'Maxwell', 'de Villars', 'Mahmudillah' ];

  return (
    <>
      <h1>Vite + React</h1>

      <Actor name = "Bapparaj"></Actor>

      {
        Players.map(player => <Actor name = {player}></Actor>)
      }

    <Todo info = {{id : 1, name : "Alpha", isDone : true}}></Todo>
    <Todo info = {{id : 3, name : "Gama", isDone : false}}></Todo>
    <Todo info = {{id : 5, name : "Beta", isDone : true}}></Todo>

      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Student></Student>

      <Practice></Practice>

      <GetObject name='Ridan' salary='200000'></GetObject>


      <GetObjectDistructure name='Ridan' salary=''></GetObjectDistructure>

      <Information info = {{name : 'ridan', age : 25, isFat : true}} car = {false}></Information>

    </>
  )
}

//A new component created here================
function Person(){

  const details = {
    name:'Ridan',
    age: 24
  }
  return <h3>Hello My name is {details.name} and age is {details.age}</h3>
}

//a Secound component Created here=============
function Student(){

    return (
    <div className='student'>
      <h3>Style Using Class Name</h3>
      </div>
  )
}


const practiceStyle = {

  padding : '20px',
  margin : '20px',
  border : '2px solid purple',
  borderRadius : '20px'
}

//a Third component Created here=============
function Practice(){

  

  return (

    <div style={practiceStyle}>
      <h3>Style using Object </h3>
    </div>
  )

}

//a Fourth component Created here=============
function GetObject(props){

  return (

    <div className='student'>
      <h3>Get Infornation Dynamically through Parametre</h3>
      <h4>My name is {props.name} with {props.salary} salary</h4>

    </div>
  )

}

//a Fifth component Created here=============
function GetObjectDistructure({name, salary = 10000}){

  return (

    <div style={practiceStyle}>
      <h3>Get Infornation Dynamically through Parametre</h3>
      <h4>My name is {name} with {salary} salary</h4>

    </div>
  )

}


//a Fifth component Created here=============
function Information({info, car}){
  // console.log(props);
  return (

    <div style={practiceStyle}>
      <h3>Get Infornation Dynamically through Destructring</h3>
      <h4>My name is {info.name}, I am {info.age} years old and I am {info.isFat ? "Fat" : "Healthy"} and I {car ? "have a car." : "don't have a car."}</h4>

    </div>
  )

}

export default App
