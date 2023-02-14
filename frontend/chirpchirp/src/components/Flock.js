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
                  placeholder="Add Followers"
                  class="
                    flex items-center max-w-md mx-auto
                    form-control
                    block
                    px-3
                    py-1.5
                    rounded
                    transition
                    ease-in-out"
              />
          </div>
        </div>
      </div>
      <div>
        {/* display trending chirps */}
      </div>
    </div>
  )
}
