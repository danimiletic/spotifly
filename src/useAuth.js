// import React from 'react';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useAuth = (code) => {
//   const [accessToken, setAccessToken] = useState()
//   const [refreshToken, setRefreshToken] = useState()
//   const [expiresIn, setExpiresIn] = useState()

//   useEffect(() => {
//     axios.post('http://localhost:3001/login', {
//       code,
//     }).then(res => {
//       console.log(res.data)
//     }).catch((error) => console.log(error))
//   }, [code])

// }

// export default useAuth;

// export default function useAuth(code) {
//   const [accessToken, setAccessToken] = useState()
//   const [refreshToken, setRefreshToken] = useState()
//   const [expiresIn, setExpiresIn] = useState()

//   useEffect(() => {
//     axios.post('http://localhost:3001/login', {
//       code,
//     })
//     .then(res => {
//       console.log(res.data)
//     }, [code])
//   })
// }


