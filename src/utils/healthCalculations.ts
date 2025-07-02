import { HealthMetrics, BMIResult, BMRResult, WaterIntakeResult } from '../types';

export const calculateBMI = (height: number, weight: number): BMIResult => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  
  let category = '';
  let description = '';
  let color = '';
  
  if (bmi < 18.5) {
    category = 'Underweight';
    description = 'You may need to gain weight. Consider consulting a healthcare provider.';
    color = 'text-blue-600';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal Weight';
    description = 'You have a healthy weight. Keep up the good work!';
    color = 'text-green-600';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    description = 'Consider a balanced diet and regular exercise to reach a healthier weight.';
    color = 'text-yellow-600';
  } else {
    category = 'Obese';
    description = 'Consider consulting a healthcare provider for a personalized weight management plan.';
    color = 'text-red-600';
  }
  
  return { bmi: Math.round(bmi * 10) / 10, category, description, color };
};

export const calculateBMR = (metrics: HealthMetrics): BMRResult => {
  const { height, weight, age, gender, activityLevel } = metrics;
  
  // Mifflin-St Jeor Equation
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  
  // Activity multipliers
  const multipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9
  };
  
  const calories = bmr * multipliers[activityLevel];
  
  const description = `Your body burns ${Math.round(bmr)} calories at rest. With your activity level, you need ${Math.round(calories)} calories daily to maintain your current weight.`;
  
  return { bmr: Math.round(bmr), calories: Math.round(calories), description };
};

export const calculateWaterIntake = (weight: number, activityLevel: string): WaterIntakeResult => {
  // Base calculation: 35ml per kg of body weight
  let baseWater = weight * 35;
  
  // Adjust for activity level
  const activityMultipliers = {
    sedentary: 1,
    light: 1.1,
    moderate: 1.2,
    active: 1.3,
    'very-active': 1.4
  };
  
  const multiplier = activityMultipliers[activityLevel as keyof typeof activityMultipliers] || 1;
  const dailyWater = baseWater * multiplier;
  
  const liters = Math.round((dailyWater / 1000) * 10) / 10;
  const glasses = Math.round(dailyWater / 250);
  
  const description = `Based on your weight and activity level, you should drink approximately ${liters}L (${glasses} glasses) of water daily.`;
  
  return { dailyWater: liters, description };
};