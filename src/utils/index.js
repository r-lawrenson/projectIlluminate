export const fetchImages = async (setter) => {
	try {
		const response = await fetch('https://picsum.photos/v2/list')
		const data = await response.json()
		setter(data)
	} catch (error) {
		console.log(error);
	}
}

// fetch request for 30 images.


// export const signUp = async (username, email, password, setter) => {
// 	try {
// 		const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
// 			method:"POST",
// 			headers: {"Content-Type": "application/json"},
// 			body: JSON.stringify({
// 				username: username,
// 				email: email,
// 				password: password,
// 			})

// 		})
// 		const data = await res.json()
// 		setter(data.user)

// 	} catch (error) {
// 		console.log(error)
// 	}
// }


export const signUp = async (username, email, password, setter) => {
	try {
		console.log(username, email, password)
		const res = await fetch(`${process.env.REACT_APP_REST_API}signup`, {
			method:"POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			})

		})
		const data = await res.json()
		setter(data.user.username)
		localStorage.setItem('myToken', data.token)

	} catch (error) {
		console.log(error)
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
	const res = await fetch(`${process.env.REACT_APP_APP_URL}/users/logout`, {
		method: 'GET',
		headers: {'Authorization': localStorage.getItem('MyToken')},
	})
	await res.json()
	setUser('')
	localStorage.removeItem('MyToken')
	setAuth(false)
}
