'use client';

import { Children, useState } from 'react';

export interface Props {
  children: React.ReactNode;
  /** @description Show dots for navigation */
  showDots?: boolean;
  /** @description Interval for autoplay in seconds. 0 disables autoplay. */
  autoplayInterval?: number;
}

export default function Slider({
  children,
  showDots = true,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);
  const totalItems = items.length;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((child, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {showDots && totalItems > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-primary' : 'bg-base-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
