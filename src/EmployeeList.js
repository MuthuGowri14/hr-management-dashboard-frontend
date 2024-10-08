import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get('http://localhost:5000/employees');
      setEmployees(response.data);
    };
    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            {employee.name} - {employee.position}
            {/* You can add buttons for edit and delete functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
