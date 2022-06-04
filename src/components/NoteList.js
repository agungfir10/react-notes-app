import React from 'react';
import NoteEmptyMessage from './NoteEmptyMessage';
import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive }) {
  return notes.length !== 0 ? (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          {...note}
          key={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  ) : (
    <NoteEmptyMessage />
  );
}
