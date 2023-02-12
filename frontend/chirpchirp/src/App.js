import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nest from './components/Nest.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Flock from './components/Flock.js';
import Chirp from './components/Chirp.js';
import Explore from './components/Explore.js';
import Profile from './components/Profile.js';
import Settings from './components/Settings.js';
import { GlobalProvider } from './context/user.js';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route 
            path="/" 
            element={<Login/>}
          />
          <Route 
            path="/signup" 
            element={<Signup/>}
          />
          <Route 
            path="/:userId/nest" 
            element={<Nest/>}
          />
          <Route 
            path="/explore" 
            element={<Explore/>}
          />
          {/* Flock for specific user */}
          <Route 
            path="/:userName/flock" 
            element={<Flock/>}
          />
          <Route 
            path="/:userName/settings" 
            element={<Settings/>}
          />
          {/* Route for specific Chirp */}
          <Route 
            path=":userName/:chirpId" 
            element={<Chirp/>}
          />
          {/* Route for specific user */}
          <Route 
            path="/:userName" 
            element={<Profile/>}
          />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
