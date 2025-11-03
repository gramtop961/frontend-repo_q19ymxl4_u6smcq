import React from 'react';
import { Search, User } from 'lucide-react';

const Navbar = ({ title = 'My Notes', query, onQueryChange, onProfileClick }) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-200 to-rose-200 shadow-sm ring-1 ring-black/5">
            <span className="text-lg font-semibold text-amber-900">✦</span>
          </div>
          <h1 className="text-lg font-semibold tracking-tight text-neutral-800 sm:text-xl">{title}</h1>
        </div>

        <div className="mx-auto hidden w-full max-w-xl items-center rounded-2xl border border-neutral-200/70 bg-white px-3 py-2 shadow-sm ring-1 ring-black/5 sm:flex">
          <Search className="mr-2 h-4 w-4 text-neutral-400" />
          <input
            value={query}
            onChange={(e) => onQueryChange?.(e.target.value)}
            placeholder="Search notes..."
            className="w-full bg-transparent text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none"
          />
        </div>

        <button
          onClick={onProfileClick}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 shadow-sm ring-1 ring-black/5 transition hover:bg-neutral-200"
          aria-label="Profile"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
