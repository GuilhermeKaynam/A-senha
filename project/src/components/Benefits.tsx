import React from 'react';
import { Car, BookOpen, Target, Clock, Wrench, PiggyBank } from 'lucide-react';
import { BenefitCard } from './BenefitCard';
import { AnimateOnScroll } from './AnimateOnScroll';

const benefits = [
  { icon: Car, title: 'Como Encontrar Leilão de Veículos', description: 'Aprenda os melhores lugares e métodos para encontrar as melhores oportunidades em leilões.' },
  { icon: BookOpen, title: 'O que São Leilões de Veículos', description: 'Entenda completamente o funcionamento dos leilões e como você pode se beneficiar deles.' },
  { icon: Target, title: 'Etapas do Processo do Leilão', description: 'Domine cada etapa do processo, desde a inscrição até a arrematação.' },
  { icon: Clock, title: 'Estratégia de Arremate', description: 'Aprenda estratégias comprovadas para arrematar veículos com o melhor custo-benefício.' },
  { icon: Wrench, title: 'Dominando a Copart', description: 'Torne-se um especialista na maior plataforma de leilões de veículos.' },
  { icon: Car, title: 'Pós Venda do Veículo', description: 'Saiba como maximizar seus lucros na revenda dos veículos arrematados.' },
  { icon: PiggyBank, title: 'Maximizando Ganhos', description: 'Descubra como multiplicar seus ganhos com carros de aluguel.' },
];

export function Benefits() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll>
          <h3 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            O Que Você Vai Aprender
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Domine todas as etapas necessárias para ter sucesso em leilões de veículos
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={index} className="delay-[${index * 100}ms]">
              <BenefitCard {...benefit} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}