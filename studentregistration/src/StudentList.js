import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "./api";


const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await getStudents();
    setStudents(result.data);
  };

  const removeStudent = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Student List</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.phone}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default StudentList;
