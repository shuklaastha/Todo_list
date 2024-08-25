import React, { useState } from 'react';

const Add = (props) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!task || !description) {
      alert('Please add a task and description');
      return;
    }
    props.addTodo(task, description);
    setTask('');  // Clear the task input
    setDescription('');  // Clear the description input
  }

  return (
    <div className="container mt-4">
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label"><h4>Task</h4></label>
          <input 
            type="text" 
            className="form-control" 
            id="task" 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            // required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label"><h4>Description</h4></label>
          <input 
            type="text" 
            className="form-control" 
            id="description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // required
          />
        </div>
        <button type="submit" className="btn btn-success">Add</button>
      </form>    
    </div>
  );
}

export default Add;
