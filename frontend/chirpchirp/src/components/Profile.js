import {React, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/user.js'
import Header from "./Header.js"
import Nav from './Nav.js'
import Settings from './Settings.js'

export default function Profile() {
  // import params from url
  const { username } = useParams();

  // initialize Global Context
  const globalState = useContext(GlobalContext);

  //set global state page to profile page
  globalState.page = 'profile';
  
  return (
    
    globalState.isLoggedIn? 
    <>
      <Header />
      <Nav/>
      <img src={globalState.pfp}/> <img src={"bannerImage"}/>
      <h6>Logged In as {globalState.username}</h6>
    </> : 
    <>
     <Header />
     <Nav/>
     <img src={globalState.pfp}/> <img src={"bannerImage"}/>
     <h6>Not logged in</h6>
    </>
  )
}
