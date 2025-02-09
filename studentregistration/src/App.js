import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";  // Custom CSS file for extra styling

const App = () => {
  return (
    <Router>
      <div className="container mt-3">
        {/* Main Title with Gradient Background */}
        <div className="title-container text-center text-white py-3 mb-4">
          <h1 className="fw-bold">Student Registration</h1>
        </div>

        {/* Navbar with Custom Colors */}
        <nav className="navbar navbar-expand-lg custom-navbar mb-4 shadow">
          <div className="container">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">📋 Student List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-student">➕ Add Student</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
