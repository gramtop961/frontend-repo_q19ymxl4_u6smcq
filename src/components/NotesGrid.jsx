import React from 'react';

const NoteCard = ({ note, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start rounded-2xl border border-neutral-200/70 bg-white p-4 text-left shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="mb-1 line-clamp-1 w-full font-serif text-lg font-semibold text-neutral-800">
        {note.title}
      </h3>
      <p className="line-clamp-3 w-full text-sm text-neutral-600">{note.content}</p>
      <div className="mt-3 w-full text-right text-[11px] uppercase tracking-wide text-neutral-400">
        {new Date(note.date).toLocaleDateString()}
      </div>
    </button>
  );
};

const NotesGrid = ({ notes, onSelect }) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3">
      {notes.map((n) => (
        <NoteCard key={n.id} note={n} onClick={() => onSelect?.(n)} />)
      )}
    </div>
  );
};

export default NotesGrid;
