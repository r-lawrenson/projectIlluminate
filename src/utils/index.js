
<<<<<<< HEAD
=======

>>>>>>> 82faeba7306c36c88b0fabfd3b6ae5d80b8d5aec
export const fetchImages = async (setter) => {
	try {
		const response = await fetch('https://picsum.photos/v2/list')
		const data = await response.json()
		setter(data)
	} catch (error) {
		console.log(error);
	}
}

export const signUp = async (username, email, password, setter) => {
	try {
		// console.log(username, email, password)
		const res = await fetch(`${process.env.REACT_APP_REST_API}signup`, {
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			})

		})
	
		let data = await res.json()
			console.info(data)	
		if(data.message) {
				return 'No';
		} else{
			setter(data.newUser.username)
		    localStorage.setItem('myToken', data.token)
		    return 'Yes';
	    }
	} catch (error) {
		console.log(error);
	}
}

export const login = async (setter) => {
try {
	const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
		method:'GET',
		headers: {Authorization: localStorage.getItem('myToken')}
	})
	const data = await res.json()
	setter(data.user)
} catch (error) {
	console.log(error)
}
}

export const logout = async (e, setUser, setAuth) => {
	e.preventDefault()
	const res = await fetch(`${process.env.REACT_APP_APP_URL}users/logout`, {
		method: 'GET',
		headers: {'Authorization': localStorage.getItem('MyToken')},
	})
	await res.json()
	setUser('')
	localStorage.removeItem('MyToken')
	setAuth(false)
}
<<<<<<< HEAD
export const resourcesSearch = async (keywords, setter) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_REST_API}resource/list`, {
			method:"POST",	
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				username: keywords
			}),
		});
		const data = await response.json()
		console.log(data);
		setter(data.resource)
		
	} catch (error) {
		console.log(error)
	}
}
=======
>>>>>>> 82faeba7306c36c88b0fabfd3b6ae5d80b8d5aec

