/**
 * AutoLoops Component
 * 
 * This component displays scrolling loops of auto brands and auto services.
 * It creates a continuous, smooth-scrolling animation to showcase the brands
 * we service and the services we provide at The Star Auto Service.
 * 
 * Features:
 * - Continuous horizontal scrolling animation
 * - Responsive design that adapts to different screen sizes
 * - Two separate loops: one for auto brands, one for services
 * - Smooth infinite scroll effect with duplicate items for seamless looping
 */

'use client';

import React from 'react';

const AutoLoops: React.FC = () => {
  // Auto brands we service
  const autoBrands = [
    'Toyota',
    'Honda',
    'Ford',
    'Chevrolet',
    'Nissan',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Volkswagen',
    'Mazda',
    'Hyundai',
    'Kia',
    'Subaru',
    'Jeep',
    'Dodge',
    'Ram',
    'GMC',
    'Lexus',
    'Acura',
    'Infiniti',
  ];

  // Services we provide
  const autoServices = [
    'Oil Changes',
    'Brake Service',
    'Engine Diagnostics',
    'Transmission Repair',
    'Battery Service',
    'Tire Rotation',
    'AC Repair',
    'Electrical Systems',
    'Suspension Service',
    'Exhaust Repair',
    'Cooling System',
    'Fuel System Service',
    'Wheel Alignment',
    'Engine Replacement',
    'Preventive Maintenance',
    'State Inspections',
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-8">
      {/* Auto Brands Loop */}
      <div className="mb-8">
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Brands We Service
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-brands">
            {/* First set of brands */}
            {autoBrands.map((brand, index) => (
              <div
                key={`brand-1-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {autoBrands.map((brand, index) => (
              <div
                key={`brand-2-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Auto Services Loop */}
      <div>
        <h2 className="text-center text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
          Our Services
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll-services">
            {/* First set of services */}
            {autoServices.map((service, index) => (
              <div
                key={`service-1-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-blue-700 dark:text-blue-200 whitespace-nowrap">
                  {service}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {autoServices.map((service, index) => (
              <div
                key={`service-2-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-blue-700 dark:text-blue-200 whitespace-nowrap">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-brands {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-brands:hover {
          animation-play-state: paused;
        }

        .animate-scroll-services {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll-services:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AutoLoops;
