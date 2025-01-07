import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { OfferBox } from './components/OfferBox';
import { Benefits } from './components/Benefits';
import { CallToAction } from './components/CallToAction';
import { PurchaseNotification } from './components/PurchaseNotification';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-custom text-white">
      <Header />
      <Hero />
      <VideoSection />
      <OfferBox />
      <Benefits />
      <CallToAction />
      <PurchaseNotification />
    </div>
  );
}