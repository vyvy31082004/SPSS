import React, {useState} from 'react'
function ToDoList(){

    const[task, settask]=useState(["Eat breakfast","Watch anime"]);
    const[newTask, setnewTask]=useState();
    function handleInputChange(event){
        setnewTask(event.target.value);

    }
    function addTask(){

    }
    function deleteTask(index){


    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }
    return (
        <div className="to-do-list">
            <h1 className="title"> To-do List 
            </h1>
            <div>
                <input className="Text"
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                
                />

                <button className="add-button" onClick={addTask}>
                    Add
                </button>
                <ol >
                    {task.map((task,index) =>
                        <li key={index}>
                            <span className="task">{task} </span>
                            <button className="deleteButton" onClick={() => deleteTask(index)}> Delete</button>
                            <button className="UpButton" onClick={() => moveTaskUp(index)}> Up</button>
                            <button className="DownButton" onClick={() => moveTaskDown(index)}> Down</button>
                        </li>
                    
                    )}
                </ol>

            </div>
        </div>
    )
}
export default ToDoList 