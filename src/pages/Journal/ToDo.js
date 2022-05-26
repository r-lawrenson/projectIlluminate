import React, {useState} from 'react'
import ToDoForm from './ToDoForm'


const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState ({
	  id: null,
	  value:''
  })

  const subitUpdate = (value) => {
	  updateTodo(edit.id, value)
	  setEdit({
		  id:null,
		  value:''
	  })
  }
if (edit.id) {
	return <ToDoForm edit={edit} onSubmit={subitUpdate} />
}

  return todos.map((todo, i) => (
	  <div 
		className={todo.isComplete ? 'todoRow complete' : 'todoRow'} 
		key={i} 
	  >
		 <div key={todo.id} onClick={() => completeTodo(todo.id)}>
			 {todo.text}
		 </div>
			<div className='icons'>
			<button
					onClick = {() => setEdit({id: todo.id, value: todo.text})} 
					className='delete' 
				>Edit</button>
				<button 
					onClick={() => removeTodo(todo.id)}
					className ='delete'>Delete</button>
			</div>

	  </div>
  ))
}

export default Todo