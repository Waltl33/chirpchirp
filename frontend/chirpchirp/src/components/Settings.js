import React, {useState} from 'react'
import React, {useState} from 'react'
import Nav from './Nav'
import Header from './Header'

export default function Settings() {
//these are prone to changes when the backend is completed
  const [profileImage, setProfileImage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bannerImage, setBannerImage] = useState('');
  const [formData, setFormData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission 

  };



  return (
    <>
      <div>
        <Header />
        <Nav />
        <h1 class="font-proza-libre text-6xl font-bold text-center text-purple p-4 ml-40">Settings</h1>
      </div>
    <div class="font-proza-libre text-purple ml-40">
      <form onSubmit={handleSubmit}>
        <div>
          <label class="text-xl p-5">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            class="rounded mx-1 bg-green text-purple"
          />
        </div>
        <div>
          <label class="text-xl p-5">E-mail:</label>
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            class="rounded mx-1 p-5 bg-green text-purple"
          />
        </div>
        <div>
          <label class="text-xl p-5">Password:</label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="rounded p-3 mx-1 mr-4 bg-green w-56 h-15 text-purple"
          />
        </div>
        <div>
          <label class="text-xl p-5">Profile Image URL:</label>
          <input 
            type="text" 
            value={profileImage} 
            onChange={(e) => setProfileImage(e.target.value)}
            class="rounded mx-1 bg-green text-purple"
          />
        </div>
        <div>
          <label class="text-xl p-5">Banner URL:</label>
          <input 
            type="text" 
            value={bannerImage} 
            onChange={(e) => setBannerImage(e.target.value)}
            class="rounded mx-1 bg-green text-purple"
          />
        </div>
        <button 
          type="submit"
          class="text-purple  hover:text-green text-4xl font-bold text-purple"
          > Save
        </button>
      </form>
    </div>
    </>
  )
}
