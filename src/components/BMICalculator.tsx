import React, { useState } from 'react';
import { Calculator, Scale } from 'lucide-react';
import { calculateBMI } from '../utils/healthCalculations';
import { BMIResult } from '../types';

export const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleCalculate = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    
    if (heightNum > 0 && weightNum > 0) {
      const bmiResult = calculateBMI(heightNum, weightNum);
      setResult(bmiResult);
    }
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Scale className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">BMI Calculator</h2>
          <p className="text-gray-600">Calculate your Body Mass Index</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
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

          <div className="flex space-x-3">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Calculator className="h-5 w-5" />
              <span>Calculate BMI</span>
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
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {result.bmi}
                </div>
                <div className={`text-lg font-semibold ${result.color}`}>
                  {result.category}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Underweight:</span>
                  <span>&lt; 18.5</span>
                </div>
                <div className="flex justify-between">
                  <span>Normal:</span>
                  <span>18.5 - 24.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Overweight:</span>
                  <span>25 - 29.9</span>
                </div>
                <div className="flex justify-between">
                  <span>Obese:</span>
                  <span>&gt; 30</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <Scale className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Enter your height and weight to calculate your BMI</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};