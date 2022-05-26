import { useState } from 'react'
import { signUp } from '../utils'

export const SignUp = ({ setUser }) => {
	const [username, setUsername] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	const submitHandler = (e) => {
		e.preventDefault()
		signUp(username, email, password, setUser)
	}


	return (
		<form id='form' onSubmit={ submitHandler }> 
		   <input onChange={(e) => setUsername(e.target.value)}/>
		   <input onChange={(e) => setEmail(e.target.value)}/>
		   <input type ='password' onChange={(e) => setPassword(e.target.value)}/>
		   <button id='signUpBtn' type='submit'>Sign-Up</button>

		</form>
	)
}