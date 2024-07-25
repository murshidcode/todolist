import React, { useState } from 'react';





function ToDoList() {
    
    const [tasks, setTask] = useState(["Eat Breake fast", "Take a shower", "walk the dog"]);
    const [newTask,setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
        
    }
    function addTask() {
        if (newTask.trim()!=="") {
            
        
        setTask(t => [...t, newTask]);
        setNewTask("");
        }
    }
    function Done(index) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTask(updatedTasks);
    }
    function deleteTask(index) {
        
        const updatedTasks = tasks.filter((_, i) => i !== index);
       setTask(updatedTasks);
    }
     
    


    return (
    
     <div className='to-do-list'>

        <h1>To Do List </h1>

     <div>
        <input
             type="text"
            placeholder='enter a task...'
            className='input'
            value={newTask} 
            onChange={handleInputChange} />
            
         <button 
            className='add-button'
            onClick={addTask}>
                Add
         </button>
        </div>

         <ol >
           {tasks.map((task, index) =>
              <li key={index}
              className='div-bar'>
             
                <span className="text">{task}</span>
                { <button
                  className='done-button'
                  onClick={() => Done(index)}>
                   Done
                </button> }

                <button
                  className='delete-button'
                  onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </li>
             )}
           
         </ol>



      </div>);

            
     }

export default ToDoList