import React from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Explore() {
  return (
    <div>
      <Nav/>
      <div class="font-proza-libre space-y-4">
        <Header/>
        <h1 class="text-5xl space-y-4">Explore</h1>
        <label class="text-2xl space-y-4">Search for Chirps</label>
        <input
          type="text"
          id="search_chirp"
          placeholder="Search for Chirps"
          class="rounded"
        />
      </div>
      <div>
        {/* trending chirps */}
      </div>
    </div>
  )
}
