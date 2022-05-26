import React , {useState, useEffect, useRef} from 'react'


const TodoForm = (props) => {
	const [input, setInput] = useState (props.edit ? props.edit.value : '')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		props.onSubmit({
			id: Math.floor(Math.random() *10000), //<---- this stops the chance of getting the same id
			text: input 
		})
		
		setInput('')
	}


  return (
	<form className ='todoForm' onSubmit={handleSubmit}>
		{props.edit ? (	
		<>
		<textarea
		type='text' 
		autoComplete="off"
		placeholder='Update Your to-do' 
		value={input}
		name='text' 
		className='todoInput'
		onChange={handleChange}
		ref={inputRef}
		/>
		<button className='Update'>Submit change</button>
	</>	
		 	 
	) : (
		
	<>
			<textarea 
			type='text' 
			autoComplete="off"
			placeholder='Add an journal entry here' 
			value={input}
			name='text' 
			className='todoInput'
			onChange={handleChange}
			ref={inputRef}
			/>
			<button className='addBtn'>Add</button>
	</>
	
	)}
	</form>
  )
}

export default TodoForm