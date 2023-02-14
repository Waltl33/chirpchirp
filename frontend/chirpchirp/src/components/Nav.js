import React from 'react'
import { NavLink } from "react-router-dom"



export default function Nav() {
  return (
    <div class="text-2xl text-white w-60 h-full shadow-md bg-purple px-1 absolute font-proza-libre p-10">
        <ul class="relative">
            <li class="relative p-5 hover:text-blue">
                <NavLink to="/nest" >🪺 Nest</NavLink>
            </li>
            <li class="relative p-5 hover:text-blue">
                <NavLink to="/explore">#️⃣ Explore</NavLink>
            </li>
            <li class="relative p-5 hover:text-blue">
                <NavLink to="/flock">➕ Flock</NavLink>
            </li>
            <li class="relative p-5 hover:text-blue">
                <NavLink to="/settings">⚙️ Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}
