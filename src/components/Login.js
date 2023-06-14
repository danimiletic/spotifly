import React from 'react';
import { Container } from '../styles/loginStyles.js';
import image from '../images/spotifly.png';

const Login = () => {
  const handleClick = () => {
    const clientId = "522821619cc64a46b98a921030b14f5a";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`;
  };

  return (
    <Container>
      <img 
        src={image}
        alt="spotifly"
      />
      <button onClick={handleClick}>Login to SpotiFly</button>
    </Container>
  )
};

export default Login;
