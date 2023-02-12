import { React, useContext, useState } from 'react'
import { GlobalContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';

export default function Login() {
    //allow navigation
    const navigate = useNavigate();
    // initial form state
    const initialState = {
      email: "",
      password: ""
    }
    //form state initialization
    const [formData, setFormData] = useState(initialState);

    // initialize Global Context
    const globalState = useContext(GlobalContext);

    // update global state of page to current page
    globalState.page = "login";

   // handle form input Change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }


  //test for name
  globalState.username = 'test';
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    globalState.isLoggedIn = true;
    navigate(`/${globalState.username}`)
  }

  return (
    <div id="login-page-container">
        <Header/>
        <div id="login-form-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} name="email" type="text" placeholder="Email" value={formData.email} />
              <input onChange={handleChange} name="password" type="text" placeholder="Password" value={formData.password} />
              <button type="submit">Login</button>
          </form>
        </div>
    </div>
    
  )
}
