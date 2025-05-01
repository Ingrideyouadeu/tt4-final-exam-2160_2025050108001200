const API_URL = 'https://localhost:7044/api/StudentAttendance';

export async function fetchAttendances() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addAttendance(attendance) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(attendance),
  });
  return res.json();
}
