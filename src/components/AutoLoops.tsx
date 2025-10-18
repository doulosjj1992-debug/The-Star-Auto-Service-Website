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

    const scrollContent = scrollElement.querySelector('.scroll-content') as HTMLDivElement;
    if (!scrollContent) return;

    // Duplicate the content for seamless loop
    const clone = scrollContent.cloneNode(true) as HTMLDivElement;
    scrollElement.appendChild(clone);

    let animationId: number;
    let scrollPosition = 0;
    const contentWidth = scrollContent.offsetWidth;

    const animate = () => {
      scrollPosition += direction === 'left' ? -1 : 1;
      
      // Reset position for seamless loop
      if (direction === 'left' && Math.abs(scrollPosition) >= contentWidth) {
        scrollPosition = 0;
      } else if (direction === 'right' && scrollPosition >= contentWidth) {
        scrollPosition = 0;
      }

      scrollElement.style.transform = `translateX(${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a small delay to ensure proper rendering
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);

  return (
    <div className={`overflow-hidden bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900 py-4 ${className}`}>
      <div 
        ref={scrollRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ transition: 'none' }}
      >
        <div className="scroll-content flex gap-8 px-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-white font-bold text-lg px-6 py-2 rounded-full bg-black/20 backdrop-blur-sm"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
