import React, { useState, useEffect } from 'react';

const names = [
  'João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 
  'Carlos Souza', 'Fernanda Lima', 'Ricardo Pereira', 'Juliana Alves'
];

export function PurchaseNotification() {
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!currentName) return null;

  return (
    <div className="fixed bottom-4 left-4 md:left-8 bg-blue-900/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg animate-fade-in max-w-[90vw] md:max-w-md">
      <p className="text-sm md:text-base truncate">
        {currentName} acabou de adquirir A Senha do Leilão! 🎉
      </p>
    </div>
  );
}