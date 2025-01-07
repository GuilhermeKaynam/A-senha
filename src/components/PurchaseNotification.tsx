import React, { useState, useEffect } from 'react';

const names = [
  'João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 
  'Carlos Souza', 'Fernanda Lima', 'Ricardo Pereira', 'Juliana Alves'
];

export function PurchaseNotification() {
  const [currentName, setCurrentName] = useState('');
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!currentName) return null;

  return (
    <div className="fixed z-40 bottom-4 left-4 right-4 md:left-4 md:right-auto">
      <div 
        key={key}
        className="bg-blue-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg animate-slide-up-fade max-w-[300px] mx-auto md:mx-0"
      >
        <p className="text-sm md:text-base">
          {currentName} acabou de adquirir A Senha do Leilão! 🎉
        </p>
      </div>
    </div>
  );
}