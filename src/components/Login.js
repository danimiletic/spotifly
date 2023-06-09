import React from 'react';
import { Container } from '../styles/loginStyles.js';

const Login = () => {
  const handleClick = () => {
    const clientId = "522821619cc64a46b98a921030b14f5a"
    const redirectUri = "http://localhost:3000/"
    const apiUrl = "https://accounts.spotify.com/authorize"
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
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(" ")}&response_type=token&show_daialog=true`;
  };


  return (
    // <Container>
    <Container>
      <img 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" 
        alt="spotify"
      />
      <button onClick={handleClick}>Login to Spotifly</button>
    </Container>
    // </Container>
  )
}

export default Login;
