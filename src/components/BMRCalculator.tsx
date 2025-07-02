import React, { useState } from 'react';
import { Calculator, Zap } from 'lucide-react';
import { calculateBMR } from '../utils/healthCalculations';
import { BMRResult, HealthMetrics } from '../types';
import { activityLevels } from '../data/healthData';

export const BMRCalculator: React.FC = () => {
  const [metrics, setMetrics] = useState<HealthMetrics>({
    height: 0,
    weight: 0,
    age: 0,
    gender: 'male',
    activityLevel: 'moderate'
  });
  const [result, setResult] = useState<BMRResult | null>(null);

  const handleInputChange = (field: keyof HealthMetrics, value: string | number) => {
    setMetrics(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    if (metrics.height > 0 && metrics.weight > 0 && metrics.age > 0) {
      const bmrResult = calculateBMR(metrics);
      setResult(bmrResult);
    }
  };

  const handleReset = () => {
    setMetrics({
      height: 0,
      weight: 0,
      age: 0,
      gender: 'male',
      activityLevel: 'moderate'
    });
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-100 p-3 rounded-lg">
          <Zap className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">BMR Calculator</h2>
          <p className="text-gray-600">Calculate your Basal Metabolic Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={metrics.height || ''}
                onChange={(e) => handleInputChange('height', parseFloat(e.target.value) || 0)}
                placeholder="170"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={metrics.weight || ''}
                onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || 0)}
                placeholder="70"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age (years)
              </label>
              <input
                type="number"
                value={metrics.age || ''}
                onChange={(e) => handleInputChange('age', parseFloat(e.target.value) || 0)}
                placeholder="25"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <select
                value={metrics.gender}
                onChange={(e) => handleInputChange('gender', e.target.value as 'male' | 'female')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <select
              value={metrics.activityLevel}
              onChange={(e) => handleInputChange('activityLevel', e.target.value as any)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label} - {level.description}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Calculator className="h-5 w-5" />
              <span>Calculate BMR</span>
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          {result ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {result.bmr} cal/day
                </div>
                <div className="text-sm text-gray-600 mb-4">Basal Metabolic Rate</div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 mb-1">
                    {result.calories} cal/day
                  </div>
                  <div className="text-sm text-green-600">Total Daily Energy Expenditure</div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <h4 className="font-semibold text-gray-800">What this means:</h4>
                <p>• BMR: Calories burned at complete rest</p>
                <p>• TDEE: Total calories needed daily</p>
                <p>• Eat less to lose weight, more to gain</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Zap className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Enter your details to calculate your BMR and daily calorie needs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};