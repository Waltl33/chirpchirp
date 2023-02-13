import React from 'react'
import { NavLink } from "react-router-dom"



export default function Nav() {
  return (
    <div class="w-60 h-full shadow-md bg-indigo-200 px-1 absolute">
        <ul class="relative">
            <li class="relative">
                <NavLink to="/nest" >Nest</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/explore" >Explore</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/flock" >Flock</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/settings" >Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}
