import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Nav from './Nav';


export default function Chirp() {
  const { userName, chirpId } = useParams(); 

  return (
    <div>
      <div>
        <Header/>
        <Nav/>
      </div>
      <div>
        {/* Individual Chirp */}
        <p>Date & Time</p>
        <p>Posted By: {userName}</p>
        <p>ChirpId: {chirpId} </p>
      </div>
    </div>
  )
}
