import React, { useState } from 'react';
import Timer from './Timer';
import TimeEntry from './TimeEntry';
import '../App.css';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const editEntry = (index, newEntry) => {
    const newEntries = entries.map((entry, i) => (i === index ? newEntry : entry));
    setEntries(newEntries);
  };

  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <Timer addEntry={addEntry} />
      <div className="entries">
        {entries.map((entry, index) => (
          <TimeEntry key={index} index={index} entry={entry} deleteEntry={deleteEntry} editEntry={editEntry} />
        ))}
      </div>
    </div>
  );
}

export default App;
