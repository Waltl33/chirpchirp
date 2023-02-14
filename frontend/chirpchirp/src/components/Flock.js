import React from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Flock() {
  return (
  <div>
    <Nav/>
    <div class="font-proza-libre space-y-4">
      <Header/>
      <h1 class="text-5xl space-y-4">Flock</h1>
      <label class="text-2xl space-y-4">Add Friend</label>
      <input
        type="text"
        id="add_friend"
        placeholder="Add a friend to your flock"
        class="rounded"
      />
    </div>
    <div>
        {/* display user & friend chirps */}
      </div>
  </div>
  )
}
