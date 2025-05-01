import React, { useState } from 'react';

const AttendanceForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    studentName: '',
    date: '',
    present: true,
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ studentName: '', date: '', present: true, remarks: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="studentName" value={form.studentName} onChange={handleChange} placeholder="Student Name" required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <label>
        Present: 
        <input name="present" type="checkbox" checked={form.present} onChange={handleChange} />
      </label>
      <input name="remarks" value={form.remarks} onChange={handleChange} placeholder="Remarks" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AttendanceForm;
