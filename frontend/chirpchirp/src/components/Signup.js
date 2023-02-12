import { React, useState, useContext } from 'react'
import { GlobalContext } from "../context/user";
import { useNavigate } from 'react-router-dom';
import Header from "./Header.js"

export default function SignUp() {
    // allow navigation
    const navigate = useNavigate();
     // initial form state
     const initialState = {
      name: "",
      username: "",
      email: "",
      password: "",
      password2: "",
    }
    //form state initialization
    const [formData, setFormData] = useState(initialState);

    // initialize Global Context
    const globalState = useContext(GlobalContext);

    // update global state of page to current page
    globalState.page = "signup";

   // handle form input Change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  //handle Sign Up form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.password2) {
      console.log('Passwords do not match')
    } else if (formData.password.length < 5) {
      console.log('Password is too shot')
    } else {
      globalState.name = formData.name
      globalState.isLoggedIn = true
      navigate(`/${globalState.name}`)
    }
  };
  return (
    <div>
        <Header/>
        <h1>"Birds Of A Feather Flock Together"</h1>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} name="name" type="text" placeholder="Full Name" value={formData.name} />
            <input onChange={handleChange} name="username" type="text" placeholder="Username" value={formData.username} />
            <input onChange={handleChange} name="email" type="text" placeholder="Email" value={formData.email} />
            <input onChange={handleChange} name="password" type="text" placeholder="Password" value={formData.password} />
            <input onChange={handleChange} name="password2" type="text" placeholder="Confirm Password" value={formData.password2} />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}
