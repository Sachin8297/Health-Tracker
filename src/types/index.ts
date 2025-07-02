export interface HealthMetrics {
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
}

export interface BMIResult {
  bmi: number;
  category: string;
  description: string;
  color: string;
}

export interface BMRResult {
  bmr: number;
  calories: number;
  description: string;
}

export interface WaterIntakeResult {
  dailyWater: number;
  description: string;
}

export interface HealthTip {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'nutrition' | 'exercise' | 'wellness' | 'hydration';
}