import React, {useState, useEffect} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'


const ToDoList = () => {
	const[todos, setTodos] = useState([])

	useEffect(() => {
		const savedJournal = JSON.parse(localStorage.getItem('journalStorage2'))

		if (savedJournal){
			setTodos(savedJournal);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('journalStorage2', JSON.stringify(todos))
	}, [todos])

    const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {  //<--- makes sure if noone types in a letter it will not show up 
			return 
		}

	const newTodos =[todo,...todos]


		setTodos(newTodos)
		// console.log(todo, ...todos)
    }
	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) { //<--- makes sure if noone types in>}//<--- makes sure if noone types in a letter it will not show up 
			return 
		}
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item))
		)
	}

    const removeTodo = (id) => {
     
		const removeArr = [...todos].filter(todo=> todo.id !== id)

		 setTodos(removeArr)
	}

	




  return (
	<div>
		<h2>What's on your mind?</h2>
	    <p>Add an entry to your journal</p>
		<ToDoForm onSubmit={addTodo} />
		<ToDo 
			todos={todos}
			removeTodo={removeTodo} updateTodo={updateTodo}
		/>
		
	</div>
  )
}

export default ToDoList