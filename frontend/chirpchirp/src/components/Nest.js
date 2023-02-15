import React from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Nest() {
  return (
    <div>
        <div>
          <Header/>
          <Nav/>
        </div>
        <div class="font-proza-libre text-purple ml-40">
          <h1 class="text-5xl font-bold p-4">Chirps</h1>
        </div>
        <div>
          {/* display all chirps */}
        </div>
    </div>
  )
}

