import React, { useState } from 'react';
import { Calculator, Droplets } from 'lucide-react';
import { calculateWaterIntake } from '../utils/healthCalculations';
import { WaterIntakeResult } from '../types';
import { activityLevels } from '../data/healthData';

export const WaterIntakeCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [result, setResult] = useState<WaterIntakeResult | null>(null);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    
    if (weightNum > 0) {
      const waterResult = calculateWaterIntake(weightNum, activityLevel);
      setResult(waterResult);
    }
  };

  const handleReset = () => {
    setWeight('');
    setActivityLevel('moderate');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Droplets className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Water Intake Calculator</h2>
          <p className="text-gray-600">Calculate your daily water needs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Calculator className="h-5 w-5" />
              <span>Calculate</span>
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
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {result.dailyWater}L
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  Daily Water Intake
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  ≈ {Math.round(result.dailyWater * 4)} glasses (250ml each)
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <h4 className="font-semibold text-gray-800">Hydration Tips:</h4>
                <p>• Start your day with a glass of water</p>
                <p>• Drink before, during, and after exercise</p>
                <p>• Monitor urine color (pale yellow is ideal)</p>
                <p>• Increase intake in hot weather</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Droplets className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Enter your weight and activity level to calculate your daily water needs</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};