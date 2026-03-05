import React from 'react';

interface NavigationProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  totalSlides: number;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  setCurrentSlide,
  totalSlides
}) => {
  return (
    <div className="slide-navigation">
      <button className="nav-button prev">← Previous</button>
      <div className="slide-indicator">
        <span>{currentSlide + 1} / {totalSlides}</span>
      </div>
      <div className="slide-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button className="nav-button next">Next →</button>
    </div>
  );
};

export default Navigation;