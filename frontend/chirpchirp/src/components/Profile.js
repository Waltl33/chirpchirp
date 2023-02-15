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
      <h6 class="font-proza-libre text-right break-normal">Logged In as {globalState.username}</h6>
      <div class="font-proza-libre text-purple ml-40">
      <h1 class="font-proza-libre text-6xl font-bold text-center text-purple p-4 ml-40">Create Chirp</h1>
      <div class="font-proza-libre text-purple ml-60">
        <input
          type="textarea"
          id="chirp"
          placeholder="Add chirp content"
          class="h-32 w-96 rounded text-center m-5 mx-1 text-2xl bg-green"
        />
        <input
          type="submit"
          id="submitChirp"
          class="text-purple hover:text-green text-2xl font-bold m-5"
        />
      </div>
    </div>
    </> : 
    <>
     <Header />
     <Nav/>
     <img src={globalState.pfp}/> <img src={"bannerImage"}/>
     <h6>Not logged in</h6>
    </>

    
  )
}
