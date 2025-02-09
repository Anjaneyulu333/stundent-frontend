import React, { useState } from "react";
import { addStudent } from "./api";


const StudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent(student);
    setStudent({ name: "", email: "", course: "", phone: "" });
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Register Student</h2>
      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input type="text" className="form-control" name="course" value={student.course} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" name="phone" value={student.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default StudentForm;