import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Hello';
import axios from 'axios';

import { useState } from 'react';
// component name must start with uppercase
function User() {
  // initial value is Virat
  let [name, setName] = useState('Virat');
  let [users, setUsers] = useState([]);
  let handleClick = () => {
    // access the backend web api using axios library : Http Get, Post, Put, Delete
    // then update the state
    setName('Virat Kohli');
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(result => setUsers(result.data))
    .catch(error => console.log(error));
  }
  return (<div>
    <h3>This is a user component!</h3>
    <h4>Hello {name} !</h4>
    <button onClick = {handleClick}>Update Name</button>
    {
      users.map((value, index) => <p key = {index}>Id = {value.id}, Name = {value.name}</p>)
    }
  </div>)
}

function App() {
  let handleClick = () => {
    console.log('handle click is called');
  }
  return (
    <div>
      <h2>This is a root component!!!</h2>
      <button onClick = {handleClick}>Button</button>
      <User />
      
    </div>
  );
}

export default App;
