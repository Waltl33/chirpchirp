import {React, useEffect, useState} from 'react'
import Nav from './Nav'
import Header from './Header'
import ChirpList from './ChirpList'

export default function Explore() {

  const [list, setList] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/trending`)
    .then(res => res.json())
    .then(obj => setList(obj))
  },[])


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
            <form>
              <label class="form-label inline-block mb-2 text-2xl">Search for Chirps</label>
              <input
                  type="search"
                  id="searchChirp"
                  placeholder="Search for Chirps"
                  class="rounded p-3 mx-1 mr-4 bg-green w-80 h-15 text-center text-lg text-purple"
              />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        {/* display chirps */}
        <ChirpList list={list}/>
      </div>
    </div>
  )
}
