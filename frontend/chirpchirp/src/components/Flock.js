import React from 'react'
import Nav from './Nav'
import Header from './Header'


export default function Flock() {
  return (
    <div>
      <div>
        <Header/>
        <Nav/>
      </div>
      <div class="font-proza-libre text-purple ml-40">
        <h1 class="text-5xl font-bold py-4">Flock</h1>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-5 text-2xl max-w-md">Add To Your Flock</label>
              <input
                  type="search"
                  id="addToFlock"
                  placeholder="Search For Chirpers"
                  class="rounded p-3 mx-1 mr-4 bg-green w-80 h-15 text-center text-lg text-purple"
              />
          </div>
        </div>
      </div>
      <div>
        {/* display user & users flock chirps */}
      </div>
    </div>
  )
}
