//** App primary */
import React, { useState, useEffect } from "react";
import "./App.css";

//** coumponents */

import Form from "./coumponents/Form";
import Navbar from "./coumponents/Navbar";
import Task from "./coumponents/Task";


const App = () => {

  //** Declarando un estado para App */

  const [task, setTask] = useState([]);
  
  //** Funcion para agregar tareas.*/

  const sendTask = (datanueva) => {
    if (!task.find((task) => task.name === datanueva.name)) {
      alert("Task save...");
      setTask([...task, datanueva]);
    } else {
      alert("This named task is in the list");
    }
  };

  //** Funcion para eliminar tareas. */

  const deleteTask = (i) => {
    let dataActualize = task.filter((e, j) => {return j !== i});
    setTask(dataActualize)
  };

  //** Verificar si hay datos en el local storage cuando se cargue la app. */

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTask(JSON.parse(data));
    }
  }, []);

  //** Enlazar datos del local storage con datos de el estado principal de la app */

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);


  return (
    <div className="App">
      <Navbar />
      <Form sendTask={sendTask} />
      <Task tasks={task} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
