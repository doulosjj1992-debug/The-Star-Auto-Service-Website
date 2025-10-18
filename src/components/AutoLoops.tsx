'use client';

import { useEffect, useRef } from 'react';

interface AutoLoopsProps {
  items?: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function AutoLoops({
  items = [
    '🔧 Expert Auto Repair',
    '🔋 Battery Service',
    '🛢️ Oil Changes',
    '⚡ Electrical Diagnostics',
    '🔩 Engine Replacement',
    '🚗 Tire Rotation',
    '❄️ Heating & Cooling',
    '✅ ASE Certified',
    '🌟 5-Star Service',
    '💯 Family Owned',
  ],
  speed = 30,
  direction = 'left',
  className = '',
}: AutoLoopsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Calculate animation duration based on speed
    const contentWidth = scrollElement.scrollWidth / 2; // Divided by 2 because we duplicate content
    const duration = contentWidth / speed;

    scrollElement.style.setProperty('--animation-duration', `${duration}s`);
    scrollElement.style.setProperty('--animation-direction', direction === 'left' ? 'normal' : 'reverse');
  }, [speed, direction]);

  return (
    <div className={`overflow-hidden bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 py-4 ${className}`}>
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap animate-scroll"
        style={{
          animationDuration: 'var(--animation-duration)',
          animationDirection: 'var(--animation-direction)',
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 text-white font-bold text-base md:text-lg px-4 md:px-6 py-2 mx-2 md:mx-4 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
          >
            <span>{item}</span>
          </div>
        ))}
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

        .animate-scroll {
          animation: scroll linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
