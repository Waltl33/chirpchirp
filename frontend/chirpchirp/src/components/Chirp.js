import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Nav from './Nav';


export default function Chirp() {
  const { userName, chirpId } = useParams(); 

  return (
    <><div>
      <Header />
      <Nav />
      <h1>Chirp</h1>

    </div><div>
      <h2>Date and Time</h2>
      
      <p>UserName = {userName}</p>
      <p>ChirpId = {chirpId}</p>


      </div></>
  )
}
