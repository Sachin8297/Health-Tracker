import React from 'react';
import { Activity, Heart, Droplets } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HealthChecker
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#calculators" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Calculators
            </a>
            <a href="#tips" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Health Tips
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
          </nav>

          {/* Quick Stats */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-red-500" />
              <span>Track Health</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span>Stay Hydrated</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};