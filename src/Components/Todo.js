import React from 'react';
import Todo_items from './Todo_items';

const Todo = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todo List</h3>
      {props.todos.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          No Todos to display
        </div>
      ) : (
        <div className="list-group">
          {props.todos.map((todo) => (
            <Todo_items key={todo.id} todo={todo} onDelete={props.onDelete}></Todo_items>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
