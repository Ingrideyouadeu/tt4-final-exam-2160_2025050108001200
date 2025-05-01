import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://localhost:5001/api/StudentAttendances') 
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data from backend');
        }
        return res.json();
      })
      .then((data) => {
        setAttendances(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Student Attendance Records</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Date</th>
            <th>Present</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.studentName}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.present ? 'Yes' : 'No'}</td>
              <td>{record.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

