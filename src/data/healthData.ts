import { HealthTip } from '../types';

export const healthTips: HealthTip[] = [
  {
    id: 1,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to maintain optimal body function and energy levels.",
    icon: "Droplets",
    category: "hydration"
  },
  {
    id: 2,
    title: "Regular Exercise",
    description: "Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly.",
    icon: "Dumbbell",
    category: "exercise"
  },
  {
    id: 3,
    title: "Balanced Diet",
    description: "Include a variety of fruits, vegetables, whole grains, and lean proteins in your daily meals.",
    icon: "Apple",
    category: "nutrition"
  },
  {
    id: 4,
    title: "Quality Sleep",
    description: "Get 7-9 hours of quality sleep each night to support physical and mental health recovery.",
    icon: "Moon",
    category: "wellness"
  },
  {
    id: 5,
    title: "Portion Control",
    description: "Use smaller plates and be mindful of portion sizes to maintain a healthy weight.",
    icon: "Scale",
    category: "nutrition"
  },
  {
    id: 6,
    title: "Stress Management",
    description: "Practice meditation, deep breathing, or yoga to manage stress and improve mental well-being.",
    icon: "Heart",
    category: "wellness"
  }
];

export const activityLevels = [
  { value: 'sedentary', label: 'Sedentary', description: 'Little or no exercise' },
  { value: 'light', label: 'Lightly Active', description: 'Light exercise 1-3 days/week' },
  { value: 'moderate', label: 'Moderately Active', description: 'Moderate exercise 3-5 days/week' },
  { value: 'active', label: 'Very Active', description: 'Hard exercise 6-7 days/week' },
  { value: 'very-active', label: 'Extremely Active', description: 'Very hard exercise, physical job' }
];