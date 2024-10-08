// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';  
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import EmployeeManagement from './components/EmployeeManagement';
import LeaveRequests from './components/LeaveRequests';
import PerformanceEvaluation from './components/PerformanceEvaluation';
import Navbar from './components/Navbar';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar for navigation */}
      <div className="App">
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
          <Route path="/register" element={<Register />} /> {/* Registration Page */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Page */}
          <Route path="/employees" element={<EmployeeManagement />} /> {/* Employee Management Page */}
          <Route path="/leave-requests" element={<LeaveRequests />} /> {/* Leave Requests Page */}
          <Route path="/performance-evaluation" element={<PerformanceEvaluation />} /> {/* Performance Evaluation Page */}
          <Route path="/" exact component={EmployeeList} />
          <Route path="/add" component={EmployeeForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
