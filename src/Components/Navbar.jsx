import React from "react";

const Navbar = (setCategory) => {
  return (
    <>
      <nav
        style={{ paddingLeft: "10px", cursor: "pointer" }}
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4 mx-2">NewsFlash</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
                <div
                  className="nav-item text-light fs-5"

                >
                  Catch the Latest Updates with Our News App!
                </div>
              
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
