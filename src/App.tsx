import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BMICalculator } from './components/BMICalculator';
import { BMRCalculator } from './components/BMRCalculator';
import { WaterIntakeCalculator } from './components/WaterIntakeCalculator';
import { HealthTips } from './components/HealthTips';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Health Calculators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our professional health calculators to track your wellness metrics and make informed decisions about your health
          </p>
        </div>

        <div id="calculators" className="space-y-12">
          <BMICalculator />
          <BMRCalculator />
          <WaterIntakeCalculator />
        </div>
      </main>

      <HealthTips />
      <Footer />
    </div>
  );
}

export default App;