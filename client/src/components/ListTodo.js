import React, { useEffect, useState} from 'react'

//components
import EditTodo from './EditTodo'


const ListTodo = () => {
 const [todos, setTodos] = useState([])
 
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            })

            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.error(error);
            
        }
    }

    
    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:5000/todos')
            const jsonData = await response.json()
        
           setTodos(jsonData)
                
        } catch (err) {
            console.error(err.message);
                
        }
    }

    useEffect(() => { 
        getTodos()
     }, [])

    
    
     
    return (
        <div>
            <table className="table mt-5 text-center">
        <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
        </thead>
  <tbody>      
                    {todos.map(todo => (
                        <tr className="align-items-center">
                            <td>{todo.description}</td>
                            <td> <EditTodo todo={todo}/></td>
                            <td>
                            <button className="btn btn-danger"
                                onClick={() => deleteTodo(todo.todo_id)}
                            >
                                Delete</button>
                           </td>
                        </tr>)
                    )}
   
  </tbody>
</table>
        </div>
    )
}

export default ListTodo

