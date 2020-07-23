import React from "react";

const InputTodo = () => {
    return <>
        <h1 className='text-center mt-5'>Pern Todo List</h1>
        <form className="d-flex">
        <input type="text" className="form-control" />
        <button className="btn btn-success">
            Add
        </button>
    </form>
        </>
}

export default InputTodo