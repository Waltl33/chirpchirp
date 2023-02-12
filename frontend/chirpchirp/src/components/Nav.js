import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/nest">Nest</NavLink>
            </li>
            <li>
                <NavLink to="/explore">Explore</NavLink>
            </li>
            <li>
                <NavLink to="/flock">Flock</NavLink>
            </li>
            <li>
                <NavLink to="/settings">Settings</NavLink>
            </li>
        </ul>
    </div>
  )
}
