import React from "react";
import { Priority } from "./Priority";
import { DeleteBtn } from "./DeleteBtn";


const Task = ({ tasks, deleteTask }) => {
  
  return (
    <div className="container">
      <div className="row mt-4">

        {tasks.map((todo, i) => {
          
          const handleDelete = () => {
            if (window.confirm("Are you sure you want delete it?")){
              deleteTask(i)
            }
          };  
          
          return (
            <div className="col-md-4" key={i}>
              <div className="card mt-4">
                <div className="card-head">{todo.name}</div>
                <div className="card-body">
                  <p>{todo.description}</p>
                </div>
                <Priority tasks={todo} />
                <DeleteBtn handleDelete={handleDelete} />
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
};
export default Task;
