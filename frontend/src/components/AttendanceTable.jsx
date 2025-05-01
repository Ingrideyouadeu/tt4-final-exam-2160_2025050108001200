import React from 'react';

const AttendanceTable = ({ records }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Date</th><th>Present</th><th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        {records.map((r, i) => (
          <tr key={i}>
            <td>{r.studentName}</td>
            <td>{r.date}</td>
            <td>{r.present ? 'Yes' : 'No'}</td>
            <td>{r.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
