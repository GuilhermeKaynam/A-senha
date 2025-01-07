import React from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

export function TimedOffer() {
  return (
    <AnimateOnScroll className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
      <div className="bg-blue-900/90 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 text-center">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Oferta Especial!
        </h3>
        <p className="text-gray-300 mb-4">
          Aproveite agora o desconto exclusivo e comece sua jornada!
        </p>
        <a
          href="https://kiwify.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
        >
          QUERO COMEÇAR AGORA!
        </a>
      </div>
    </AnimateOnScroll>
  );
}