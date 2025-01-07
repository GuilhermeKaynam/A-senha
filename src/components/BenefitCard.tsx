import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-blue-900/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:transform hover:scale-105 transition-all duration-300">
      <Icon className="w-12 h-12 mb-4 text-blue-400" />
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}