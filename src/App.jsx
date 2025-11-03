import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import NotesGrid from './components/NotesGrid.jsx';
import AuthScreen from './components/AuthScreen.jsx';
import Editor from './components/Editor.jsx';
import { Plus } from 'lucide-react';

function App() {
  const [page, setPage] = useState('auth'); // 'auth' | 'home' | 'editor'
  const [query, setQuery] = useState('');
  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Project ideas',
      content: 'Explore a minimalist notes app inspired by Notion and Keep. Focus on calm colors and great typography... ',
      date: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Grocery list',
      content: '- Sourdough\n- Oat milk\n- Berries\n- Granola\n- Dark chocolate',
      date: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'Reading notes',
      content: 'Key takeaways: Keep interfaces simple. Use whitespace generously. Favor legibility over ornamentation.',
      date: new Date(Date.now() - 2 * 86400000).toISOString(),
    },
  ]);
  const [current, setCurrent] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return notes.filter(
      (n) => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q)
    );
  }, [notes, query]);

  const startNew = () => {
    const draft = { id: undefined, title: '', content: '', date: new Date().toISOString() };
    setCurrent(draft);
    setPage('editor');
  };

  const openNote = (n) => {
    setCurrent(n);
    setPage('editor');
  };

  const saveNote = (n) => {
    if (!n.title && !n.content) {
      setPage('home');
      return;
    }
    if (n.id) {
      setNotes((prev) => prev.map((x) => (x.id === n.id ? { ...n, date: new Date().toISOString() } : x)));
    } else {
      const id = Math.random().toString(36).slice(2, 9);
      setNotes((prev) => [{ ...n, id, date: new Date().toISOString() }, ...prev]);
    }
    setPage('home');
  };

  const deleteNote = (n) => {
    if (!n?.id) {
      setPage('home');
      return;
    }
    setNotes((prev) => prev.filter((x) => x.id !== n.id));
    setPage('home');
  };

  if (page === 'auth') {
    return (
      <AuthScreen
        onLogin={() => setPage('home')}
        onGuest={() => setPage('home')}
      />
    );
  }

  if (page === 'editor') {
    return (
      <Editor
        note={current}
        onBack={() => setPage('home')}
        onSave={saveNote}
        onDelete={deleteNote}
      />
    );
  }

  // Home
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,rgba(250,245,237,0.7),rgba(255,255,255,0.9))]">
      <Navbar title="My Notes" query={query} onQueryChange={setQuery} onProfileClick={() => setPage('auth')} />
      <NotesGrid notes={filtered} onSelect={openNote} />

      <button
        onClick={startNew}
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition hover:scale-[1.03] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        aria-label="Create note"
      >
        <Plus className="h-6 w-6" />
      </button>
    </div>
  );
}

export default App;
