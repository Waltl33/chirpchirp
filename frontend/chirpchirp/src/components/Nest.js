import React from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Nest() {
  return (
    <div>
    <Nav/>
    <div class="font-proza-libre space-y-4">
      <Header/>
      <h1 class="text-5xl font-bold font-proza-libre space-y-4">Chirps</h1>
        <div>
          {/* display all chirps */}
        </div>
    </div>
    </div>
  )
}

