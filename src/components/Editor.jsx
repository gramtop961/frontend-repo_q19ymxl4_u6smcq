import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';

const LinedPaper = ({ children }) => (
  <div
    className="relative h-full w-full overflow-auto rounded-2xl border border-amber-100 bg-amber-50/50 shadow-inner"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 36px, rgba(234, 179, 8, 0.18) 37px)",
    }}
  >
    {/* margin column */}
    <div className="absolute inset-y-0 left-0 w-12 border-r border-rose-200/60" />
    <div className="relative z-10 p-6">{children}</div>
  </div>
);

const Editor = ({ note, onBack, onSave, onDelete }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  useEffect(() => {
    setTitle(note?.title || '');
    setContent(note?.content || '');
  }, [note]);

  return (
    <div className="flex h-screen w-full flex-col bg-[radial-gradient(ellipse_at_top,rgba(250,245,237,0.7),rgba(255,255,255,0.9))]">
      <div className="flex items-center gap-2 border-b border-neutral-200/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-xl border border-neutral-200/70 bg-white px-3 py-2 text-sm text-neutral-700 shadow-sm ring-1 ring-black/5 transition hover:bg-neutral-50"
        >
          <ArrowLeft className="h-4 w-4" />Back
        </button>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => onDelete?.(note)}
            className="inline-flex items-center gap-2 rounded-xl border border-rose-200/70 bg-white px-3 py-2 text-sm text-rose-700 shadow-sm ring-1 ring-black/5 transition hover:bg-rose-50"
          >
            <Trash2 className="h-4 w-4" />Delete
          </button>
          <button
            onClick={() => onSave?.({ ...note, title, content })}
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white shadow-sm transition hover:bg-neutral-800"
          >
            <Save className="h-4 w-4" />Save
          </button>
        </div>
      </div>

      <div className="mx-auto grid h-[calc(100vh-56px)] w-full max-w-5xl grid-rows-[auto,1fr] gap-3 p-4 sm:p-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          className="w-full rounded-2xl border border-neutral-200/70 bg-white px-4 py-3 font-serif text-xl font-semibold leading-none text-neutral-800 shadow-sm ring-1 ring-black/5 placeholder-neutral-400 focus:outline-none"
        />
        <LinedPaper>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing..."
            className="h-[70vh] w-full resize-none bg-transparent p-1 font-sans text-[15px] leading-9 text-neutral-800 placeholder-neutral-400 focus:outline-none sm:h-[72vh]"
          />
        </LinedPaper>
      </div>
    </div>
  );
};

export default Editor;
