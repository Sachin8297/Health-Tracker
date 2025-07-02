import React from 'react';
import { Calculator, Heart, TrendingUp, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Complete
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}Health Tracker
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Calculate BMI, BMR, and water intake with our professional health calculators. 
                Take control of your wellness journey today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Start Calculating</span>
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Calculators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Accurate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">Free</div>
                <div className="text-gray-600">Always</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">BMI Calculator</h3>
                <p className="text-gray-600 text-sm">Track your body mass index</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                <TrendingUp className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">BMR Calculator</h3>
                <p className="text-gray-600 text-sm">Calculate metabolic rate</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-4">
                <Shield className="h-8 w-8 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Water Intake</h3>
                <p className="text-gray-600 text-sm">Stay properly hydrated</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};