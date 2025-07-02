import React from 'react';
import * as Icons from 'lucide-react';
import { healthTips } from '../data/healthData';

export const HealthTips: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      nutrition: 'bg-green-100 text-green-600',
      exercise: 'bg-blue-100 text-blue-600',
      wellness: 'bg-purple-100 text-purple-600',
      hydration: 'bg-cyan-100 text-cyan-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section id="tips" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Health & Wellness Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice to help you maintain a healthy lifestyle and achieve your wellness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${getCategoryColor(tip.category)}`}>
                {getIcon(tip.icon)}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {tip.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(tip.category)}`}>
                  {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};