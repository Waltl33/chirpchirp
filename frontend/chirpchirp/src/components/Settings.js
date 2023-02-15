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
    <><div>
      <Header />
      <Nav />
      <h1 class="font-proza-libre text-6xl font-bold text-center text-purple">Settings</h1>
    </div><form onSubmit={handleSubmit}>
        <div>
          <label>Profile Image URL:</label>
          <input type="text" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Banner URL:</label>
          <input type="text" value={bannerImage} onChange={(e) => setBannerImage(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form></>
  )
}
