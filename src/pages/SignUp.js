import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { signUp } from '../utils'
// import { useNavigate } from 'react-router-dom'

export const SignUp = ({ user, setUser }) => {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [error, setError] = useState()
    // const navigate = useNavigate();
    

    useEffect(() => {
        if (isLoggedin === "No") {
            refresh()
        }
    },[isLoggedin, setIsLoggedIn])

    const refresh = () => {
            alert('This username already exists')
            window.location.reload()
    }

	const submitHandler = async (e) => {
		e.preventDefault()
        console.log(error)
        setIsLoggedIn(await signUp(username, email, password, setUser))
    }
    
    const logout = () => {
		localStorage.removeItem('myToken')
		setIsLoggedIn(false)
	}


    return (
        <>
        <div id='loginForm'>
          {!isLoggedin || isLoggedin === 'No' ? (
            <>
              <form onSubmit={submitHandler}>
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <button type="submit" onClick={submitHandler}>
                  GO
                </button>
              </form>
            </>
          ) : (
            <>
              <h2>{username} is logged in</h2>
              <Navigate to='/userProfile' />
              <button onClickCapture={logout}>logout user</button>
            </>
          )}
        </div>
      </>
    );
	  





	// return (
	// 	<form id='form' onSubmit={ submitHandler }> 
	// 	   <input onChange={(e) => setUsername(e.target.value)}/>
	// 	   <input onChange={(e) => setEmail(e.target.value)}/>
	// 	   <input type ='password' onChange={(e) => setPassword(e.target.value)}/>
	// 	   <button id='signUpBtn' type='submit'>Sign-Up</button>

	// 	</form>
	// )
}