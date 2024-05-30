import React, { useState } from 'react';

const TimeEntry = ({ entry, index, deleteEntry, editEntry }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newEntry, setNewEntry] = useState(entry);

  const handleEdit = () => {
    if (isEditing) {
      editEntry(index, newEntry);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="time-entry">
      {isEditing ? (
        <input
          type="text"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        />
      ) : (
        <p>{entry}</p>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={() => deleteEntry(index)}>Delete</button>
    </div>
  );
};

export default TimeEntry;
