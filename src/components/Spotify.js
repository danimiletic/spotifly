import React from 'react';
import { Container } from '../styles/spotifyStyles';
import image from '../images/spotifly.png'
// import Logout from './Logout';

const Spotify = () => {
  return (
    <Container>
      <img 
        src={image}
        alt="spotifly"
      />
    </Container>
  )
};

export default Spotify;