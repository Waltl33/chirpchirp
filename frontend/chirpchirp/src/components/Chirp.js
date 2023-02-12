import React from 'react'
import { useParams } from 'react-router-dom'

export default function Chirp() {
  const { userName, chirpId } = useParams(); 

  return (
    <div>
        <h1>Chirp</h1>
        <p>UserName = {userName}</p>
        <p>ChirpId = {chirpId}</p>
    </div>
  )
}
