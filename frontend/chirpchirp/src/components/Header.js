import { React, useContext } from 'react';
import { GlobalContext } from "../context/user";
import { NavLink } from 'react-router-dom';


export default function Header() {

    // initialize Global Context
    const globalState = useContext(GlobalContext);

    function checkPage() {
      if (globalState.page === "login") {
        return <span className="headerSpan"><NavLink to= "/signup"><button className="headerBtn">Sign Up</button></NavLink></span>
      } else if (globalState.page === "signup") {
        return <span className="headerSpan"><NavLink to= "/"><button className="headerBtn">Login</button></NavLink></span>
      } else if (globalState.isLoggedIn === true) {
        return <img className="headerImg" src={globalState.pfp}/>
      } else {
       return <div>
          <NavLink to= "/signup">
            <button className="headerBtn">Sign Up</button>
          </NavLink>
          <NavLink to= "/">
            <button className="headerBtn">Login</button>
          </NavLink>
        </div>
      }
    }

  return (
    <div className="header">
        <h1 id="logo">ChirpChirp</h1>
        {checkPage()}
    </div>
  )
}
