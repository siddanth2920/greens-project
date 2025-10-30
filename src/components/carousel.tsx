import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  autoPlay = false,
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;

  useEffect(() => {
    if (autoPlay && totalItems > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayInterval, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ position: 'relative', width: '100%', padding: '2rem 0' }}>
      {/* Carousel Container */}
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                flexShrink: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalItems > 1 && (
        <>
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              color: '#5D4157',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              padding: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              color: '#5D4157',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalItems > 1 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px', 
          marginTop: '32px' 
        }}>
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                height: '12px',
                width: index === currentIndex ? '32px' : '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: index === currentIndex ? '#5D4157' : '#E8DDD5',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.opacity = '0.7';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;