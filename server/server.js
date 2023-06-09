// const express = require('express');
// const cors = require ('cors')
// const SpotifyWebApi = require('spotify-web-api-node');

// const app = express();
// app.use(cors())

// app.post('/login', (req, res) => {
//   const code = req.body.code
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: 'http://localhost:3001',
//     clientId: '522821619cc64a46b98a921030b14f5a',
//     clientSecret: '16dcbf8ad8e84122a308275c80c889d8' 
//   })

//   spotifyApi.authorizationCodeGrant(code).then(data => {
//     res.json({
//       accessToken: data.body.access_token,
//       refreshToken: data.body.refresh_token,
//       expiresIn: data.body.expires_in
//     })
//   }).catch(() => {
//     res.sendStatus(400)
//   })
// })

// app.listen(3001)