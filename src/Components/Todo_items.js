import React from 'react';

const Todo_items = ({ todo, onDelete }) => {
  return (
    <div className='list-group-item d-flex justify-content-between align-items-center my-2'>
      <div>
        <h5 className='mb-1'>{todo.title}</h5>
        <p className='mb-1'>{todo.task}</p>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input my-3" id="exampleCheck1" defaultChecked={todo.done}/>
            <label className="form-check-label my-3" for="exampleCheck1">Done </label>
        </div>
      </div>
      <button 
        className='btn btn-sm btn-danger' 
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo_items;
