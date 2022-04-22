import React from 'react';
import Note from './components/Note';
import './style.css';

export default function App({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note note={note} />
        ))}
      </ul>
    </div>
  );
}
