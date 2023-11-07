import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ButtonsComponent } from "./components/ButtonsComponent"
import { EditComponent } from "./components/EditComponent"
import { InputComponent } from "./components/InputComponent"
import './App.css'


function App() {
  const [task, setTask] = useState("");
  const [rows, setRows] = useState([]);
  const [editingRows, setEditingRows] = useState([]);
  const [editedTask, setEditedTask] = useState("");
  
  const addNewTask = (e) => {
    const newTask = e.target.value;
    setTask(newTask);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setRows(rows.concat(task));
    setEditingRows(editingRows.concat(false));
    setTask("");
  }

  const deleteRow = (deletedRow, indexDeletedRow) => {
    const newRows = rows.filter((rows) => rows !== deletedRow);
    setRows(newRows);
    setEditingRows((editingRows.filter((_,index) => index !== indexDeletedRow)));
  }

  const toggleEdit = (index) => {
    setEditingRows(editingRows.map((_, i) => i === index));
  }

  const check = () => {
    console.log(rows);
    console.log(editingRows);
  }

  const saveEdit = (index) => {
    (editedTask === "") ? (alert("You have to input something")) : (setRows(rows, rows[index] = editedTask));
    setEditingRows(editingRows.map((_, i) => false));
    setEditedTask("");
  }


  return (  
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-gray-400 rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <InputComponent handleSubmit={handleSubmit} task={task} addNewTask={addNewTask}/>
        <ul>
          {
            rows.map((row, index) => (
              <li key={index}> 
                {editingRows[index] ? (
                  <EditComponent setEditedTask={setEditedTask} saveEdit={saveEdit} index={index}/>
                ) : (
                  <div className="flex mb-4 items-center">
                    <input type="checkbox" className="flex-no-shrink ml-4 mr-2 "></input>
                    <div className="w-full">
                      {row}
                    </div>
                    <ButtonsComponent deleteRow={deleteRow} row={row} index={index} toggleEdit={toggleEdit}/>
                    <button onClick={check}>CHECK</button>
                  </div>
                )}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}


export default App
