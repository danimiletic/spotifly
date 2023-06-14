import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.js';
import { useStateProvider } from './utils/StateProvider.jsx';
import { reducerCases } from './utils/Constants.js';
import Spotify from './components/Spotify';


const App = () => {

  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({type: reducerCases.SET_TOKEN, token });
    }

  }, [token, dispatch]);

  return (
    <div>
      { token ? <Spotify /> : <Login /> }
    </div>
  );
}

export default App;
