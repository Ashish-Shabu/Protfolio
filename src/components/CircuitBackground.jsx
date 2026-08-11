import React from 'react';

const CircuitBackground = () => {
  return (
    <div className="circuit-bg">
      <svg width="100%" height="100%" viewBox="0 0 1000 600">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0e7490" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Circuit paths */}
        <path
          d="M50,100 L200,100 L200,200 L350,200 L350,300 L500,300 L500,400 L650,400 L650,500 L800,500"
          fill="none"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          className="circuit-line"
        />
        
        <path
          d="M100,50 L100,150 L250,150 L250,250 L400,250 L400,350 L550,350 L550,450 L700,450 L700,550"
          fill="none"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          className="circuit-line"
          style={{ animationDelay: '2s' }}
        />
        
        <path
          d="M150,200 L300,200 L300,300 L450,300 L450,400 L600,400 L600,500 L750,500"
          fill="none"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          className="circuit-line"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Circuit nodes */}
        <circle cx="200" cy="100" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="350" cy="200" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="500" cy="300" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="650" cy="400" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="800" cy="500" r="4" fill="#06b6d4" opacity="0.6" />
        
        <circle cx="100" cy="50" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="250" cy="150" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="400" cy="250" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="550" cy="350" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="700" cy="450" r="4" fill="#06b6d4" opacity="0.6" />
        
        <circle cx="300" cy="200" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="450" cy="300" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="600" cy="400" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="750" cy="500" r="4" fill="#06b6d4" opacity="0.6" />
      </svg>
    </div>
  );
};

export default CircuitBackground; 