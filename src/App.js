import React, { useState, useEffect } from 'react';
// import { Credentials } from './Credentials';
// import Dropdown from './Dropdown';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './Login';
// import Dashboard from './Dashboard';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login.js';


function App() {
  return (
    <Login />
  )



  // const spotify = Credentials();

  // console.log('rendeirng app js');

  // const data = [
  //   { value: 1, name: 'A'},
  //   { value: 2, name: 'B'},
  //   { value: 3, name: 'C'},
  // ];

  // return code ? <Dashboard code={code} /> : <Login />

    // // <form onSubmit={() => {}}>
    // // <div className="container">
    //   {/* <header className="App-header">
    //     <h1>Spotifly</h1> */}
    //     {/* <Dropdown options={data} />
    //     <Dropdown options={data} />
    //     <button type='submit'>
    //       Search
    //     </button> */}
    //     {/* <a href={'http://localhost:3000/callback?client_id=522821619cc64a46b98a921030b14f5a&redirect_uri=http://localhost:3000/callback$response_type=token'}>Log in to spotify</a> */}
    //   {/* </header> */}
    // // </div>
    // // </form>
  
}

export default App;
