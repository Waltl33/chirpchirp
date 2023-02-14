import React from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Explore() {
  return (
    <div>
      <div>
        <Header/>
        <Nav/>
      </div>
      <div class="font-proza-libre text-purple ml-40">
        <h1 class="text-5xl font-bold p-4">Explore</h1>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label class="form-label inline-block mb-2 text-2xl">Search for Chirps</label>
              <input
                  type="search"
                  id="searchChirp"
                  placeholder="Search for Chirps"
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
