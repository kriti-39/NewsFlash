import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <nav
          style={{ paddingLeft: "10px", cursor: "pointer" }}
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <p
              style={{
                color: "white",
                margin: "20px",
                paddingRight: "55x",
                paddingLeft: "5px",
              }}
            >
              We acknowledge the experience gained and extend our gratitude to
              our teachers with special thanks to Chirag Sir, for his guidance
              and support throughout the learning journey.
            </p>
            <span className="badge bg-light text-dark fs-6 mx-3">
              Team Members
            </span>

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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6 mx-3 ">
                    Sourav
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6 mx-3 ">
                    Shayori
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6  mx-3">
                    Madhurima
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6  mx-3">
                    Anupras
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6  mx-3">
                    Rajdeep
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6  mx-3">
                    Kriti
                  </div>
                </li>
                <li className="nav-item">
                  <div className=" badge bg-light text-dark fs-6  mx-3">
                    Adnan
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
