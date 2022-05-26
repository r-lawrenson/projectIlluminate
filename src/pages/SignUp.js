import { useState } from 'react'
import { signUp } from '../utils'

export const SignUp = ({ user, setUser }) => {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [error, setError] = useState(false)

    const refresh = () => {
            alert('This username already exists')
            window.location.reload()
    }

	const changeHandler = (e) => {
		e.preventDefault()
        // console.log(username, email, password)
		
        console.log(error)
        if (!error) {
            signUp(username, email, password, setUser)
            setIsLoggedIn(true)
        } if (error) {
            refresh()
            setIsLoggedIn(false)
            
        } else {
            alert ('Username taken please try again!')
            refresh()
        }
     
	}
    

	const logout = () => {
		localStorage.removeItem('token-info')
		setIsLoggedIn(false)
	}


    return (
		// <>
		  <div id='loginForm'>
				<form onSubmit={changeHandler}>
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
				  <button type="submit" onClick={changeHandler}>
					GO
				  </button>
				</form>
        </div>
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