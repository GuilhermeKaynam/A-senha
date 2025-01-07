import React from 'react';
import { Timer } from './Timer';

export function Header() {
  return (
    <header className="glass-effect py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          A Senha do Leilão
        </h1>
        <Timer />
      </div>
    </header>
  );
}