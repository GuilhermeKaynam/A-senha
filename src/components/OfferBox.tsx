import React from 'react';

export function OfferBox() {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="glass-effect p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 inline-block uppercase tracking-wider shadow-lg">
              Oferta Exclusiva
            </span>
            <div className="mt-6">
              <p className="text-gray-400 text-lg mb-2 uppercase tracking-wide">Valor Original</p>
              <p className="text-3xl text-gray-500 line-through font-light">R$ 1.197,90</p>
              <div className="my-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
              <p className="text-gray-400 text-lg mb-2 uppercase tracking-wide">Hoje Apenas</p>
              <p className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
                R$ 197,00
              </p>
              <div className="bg-green-500/10 rounded-lg p-3 mt-6">
                <p className="text-emerald-400 font-medium">
                  Economia de R$ 1.000,90 (83% OFF)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}