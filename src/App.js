import { useState, useEffect } from 'react';
import { Header } from './components/headers'
import { User } from './components/user'
import { fetchImages } from './utils';
import { LogForm } from './components/form.js';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css';

//Importing pages
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { ResetPassword } from './pages/ResetPassword'
import { HelpfulLinks } from './pages/HelpfulLinks'
import { TranquilZone } from './pages/TranquilZone'
import { UserProfile } from './pages/UserProfile'
import { Journal } from './pages//Journall/journal'

const App = () => {
  // const [userInput, setUserInput] = useState()
  const [user, setUser] = useState()
  const [images, setImages] = useState([])


  useEffect(() => {
    fetchImages(setImages)
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/resetpassword">Reset Password</Link>
        <Link to="/helpfullinks">Helpful Links</Link>
        <Link to="/tranquilzone">Tranquil Zone</Link>
        <Link to="/userprofile">User Profile</Link>
        <Link to="/journal">Journal</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/signup" element={<SignUp />}/> */}
        <Route path="/signup" element={<SignUp setUser={setUser}  />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/helpfullinks" element={<HelpfulLinks />}/>
        <Route path="/journal" element={<Journal />}/>
        <Route path="/tranquilzone" element={<TranquilZone />}/>
        <Route path="/userprofile" element={<UserProfile />}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
      </Routes>
      </BrowserRouter>
          
   
   
      </div>
  )
}

export default App;

//{!user && <LogForm setUser={setUser} />}
          {/* if user is not true hide logform */}//
             
     // <User user={user} bio={user}/>//

  /* { <form onSubmit={submitHandler}>
       <input onChange={(e) => setUserInput(e.target.value)} />
      </form>
      {title ? <h2>you wrote a title</h2> : <h2>hurry</h2>}
      {title && <h2>horray</h2> }} */
// {/* <Header title={title} /> */} notes.... how to render title in header 