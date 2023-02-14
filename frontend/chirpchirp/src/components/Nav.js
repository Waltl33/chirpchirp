import React from 'react'
import { NavLink } from "react-router-dom"



export default function Nav() {
  return (
    <div class="text-2xl w-60 h-full shadow-md bg-indigo-200 px-1 absolute font-proza-libre p-10">
        <ul class="relative">
            <li class="relative">
                <NavLink to="/nest" class="py-4 px-10 font-semibold hover:text-purple-500 transition duration-300">Nest</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/explore" class="py-4 px-10 font-semibold hover:text-purple-500 transition duration-300">Explore</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/flock" class="py-4 px-10 font-semibold hover:text-purple-500 transition duration-300" >Flock</NavLink>
            </li>
            <li class="relative">
                <NavLink to="/settings" class="py-4 px-10 font-semibold hover:text-purple-500 transition duration-300" >Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}
