import React from 'react';
import { Activity, Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">HealthChecker</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted companion for health monitoring and wellness tracking. 
              Calculate BMI, BMR, and water intake with professional accuracy.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="h-5 w-5 text-red-400" />
              <span>Made with care for your health</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Calculators</h4>
            <ul className="space-y-2">
              <li><a href="#bmi" className="text-gray-300 hover:text-white transition-colors">BMI Calculator</a></li>
              <li><a href="#bmr" className="text-gray-300 hover:text-white transition-colors">BMR Calculator</a></li>
              <li><a href="#water" className="text-gray-300 hover:text-white transition-colors">Water Intake</a></li>
              <li><a href="#tips" className="text-gray-300 hover:text-white transition-colors">Health Tips</a></li>
            </ul>
          </div>

          {/* Health Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Health Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nutrition Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exercise Plans</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Wellness Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Health FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Health St, Wellness City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-HEALTH</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@healthchecker.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 HealthChecker. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};