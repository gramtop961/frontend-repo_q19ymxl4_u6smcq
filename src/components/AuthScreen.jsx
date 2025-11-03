import React, { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';

const AuthScreen = ({ onLogin, onGuest }) => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top,rgba(250,245,237,0.9),rgba(255,255,255,1))]">
      {/* subtle background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-amber-100/80 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-rose-100/80 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-neutral-200/70 bg-white/90 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-200 to-rose-200 ring-1 ring-black/5">
              <span className="text-lg font-semibold text-amber-900">✦</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-800">My Notes</h2>
              <p className="text-sm text-neutral-500">Calm, minimal note‑taking</p>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl bg-neutral-100 p-1">
            <button
              onClick={() => setMode('login')}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                mode === 'login' ? 'bg-white shadow ring-1 ring-black/5' : 'text-neutral-500'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                mode === 'signup' ? 'bg-white shadow ring-1 ring-black/5' : 'text-neutral-500'
              }`}
            >
              Sign up
            </button>
          </div>

          <div className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-neutral-200/70 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm ring-1 ring-black/5 placeholder-neutral-400 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-neutral-500">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-neutral-200/70 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm ring-1 ring-black/5 placeholder-neutral-400 focus:outline-none"
              />
            </label>

            <button
              onClick={() => onLogin?.({ mode, email, password })}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              {mode === 'login' ? <LogIn className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
              {mode === 'login' ? 'Login' : 'Create account'}
            </button>

            <button
              onClick={onGuest}
              className="w-full rounded-xl border border-neutral-200/70 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-black/5 transition hover:bg-neutral-50"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
