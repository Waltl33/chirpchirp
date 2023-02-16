import {React, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/user.js'
import Header from "./Header.js"
import Nav from './Nav.js'
import Settings from './Settings.js'

export default function Profile() {

  // initialize Global Context
  const globalState = useContext(GlobalContext);

  //set global state page to profile page
  globalState.page = 'profile';
  //initial form state + defaults for post
  const initialState = {
    content: "",
    likes: 0,
    user_id: globalState.userId
  }
  //create state for Chirp Form
  const [formData, setFormData] = useState(initialState);

  // handle form input Change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  //handle chirp form submit
  const handleSubmit = (e) => {
    fetch(`http://localhost:9292/user/${globalState.username}/posts`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(obj => console.log(obj));
  }
  
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
      <form onSubmit={handleSubmit}>
        <input
          name="content"
          onChange={handleChange}
          type="textarea"
          id="chirp"
          placeholder="Add chirp content"
          class="h-32 w-96 rounded text-center m-5 mx-1 text-2xl bg-green"
        />
        <button
          type="submit"
          id="submitChirp"
          class="text-purple hover:text-green text-2xl font-bold m-5"
        >Chirp</button>
      </form>
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
