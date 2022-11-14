import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-solid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              List Task
              <span className="badge badge-ill badge-ligth ml-2">{}</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              // onClick={ ocul }
              href="#"
            >
              Add Task
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
