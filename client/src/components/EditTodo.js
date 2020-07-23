import React, {useState} from 'react'

function EditTodo({ todo }) {
    

const [description, setDiscription] = useState(todo.description)

// edit description function
    
    const updateDescription = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })

            window.location = '/'
        } catch (err) {
            console.error(err);
            
        }
    }



    
    return (
        <div>
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>


            <div className="modal fade"
                id={`id${todo.todo_id}`}
                tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
                onClick= {() =>setDiscription( todo.description)}
             >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setDiscription(todo.description)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={e =>setDiscription( e.target.value)}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-warning" onClick={updateDescription}>Edit</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default EditTodo
