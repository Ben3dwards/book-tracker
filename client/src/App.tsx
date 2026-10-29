import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect (() =>{
    fetch("/api/health")
    .then((res) => res.json())
    .then((data) => setStatus(data.status))
    .catch(() => setStatus("server not reachable"));
  }, [])

  return (
    <main>
      <h1>Book Tracker</h1>
      <p>API status: {status}</p>
    </main>
  );
}

export default App;