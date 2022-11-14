//** Formulario para adquirir */
import React, { useState } from "react";


const Form = (props) => {

  const [data, setData] = useState({});
  
  //  Funcion que envia datos 

  const enviaData = (e) => {
    e.preventDefault();
    props.sendTask(data);
  };

  //**  Optiene data.  (Aprender UseRefec)*/
  
  const inputData = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <form className="Form" onSubmit={enviaData}>
      <div className="md-3 mt-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          onChange={inputData}
          placeholder="Enter task named"
          name="name"
        ></input>
      </div>
      <div>
        <label className="container mt-3">Description:</label>
        <textarea
          onChange={inputData}
          className="form-control"
          rows="5"
          name="description"
        ></textarea>
      </div>
      <div>
        <label className="container mt-3">Prioritty: {}</label>
        <input
          name="priority"
          type="range"
          onChange={inputData}
          className="form-range"
          min="0"
          max="2"
        ></input>
      </div>
      <div className="container mt-3">
        <button className="btn-lg btn btn-outline-dark">Add</button>
      </div>
    </form>
  );
};

export default Form;
