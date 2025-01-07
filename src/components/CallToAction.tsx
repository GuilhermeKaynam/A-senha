import React from 'react';

export function CallToAction() {
  return (
    <section className="py-20 px-4 glass-effect mt-16">
      <div className="container mx-auto text-center max-w-4xl">
        <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Não Perca Esta Oportunidade!
        </h3>
        <p className="text-xl mb-12 text-gray-300">
          Aprenda a lucrar com leilões de veículos hoje mesmo.<br />
          Esta oferta especial é por tempo limitado!
        </p>
        <a
          href="https://kiwify.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-12 rounded-xl text-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105"
        >
          QUERO COMEÇAR AGORA!
        </a>
        <div className="mt-12 pt-12 border-t border-blue-500/20">
          <p className="text-gray-400 text-sm">
            © 2024 A Senha do Leilão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}