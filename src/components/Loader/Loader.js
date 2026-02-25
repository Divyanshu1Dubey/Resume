import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1200);
    const taglineTimer = setTimeout(() => setShowTagline(true), 2400);
    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(taglineTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      {/* Particle background */}
      <div className="particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Animated grid lines */}
      <div className="grid-overlay" />

      <div className="logo-wrapper">
        {/* Hexagon SVG with initials */}
        <svg className="hex-logo" viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#0080ff" />
              <stop offset="100%" stopColor="#8000ff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Outer hexagon */}
          <polygon
            className="hex-outer"
            points="100,10 185,57.5 185,152.5 100,200 15,152.5 15,57.5"
            fill="none"
            stroke="url(#hexGrad)"
            strokeWidth="3"
            filter="url(#glow)"
          />
          {/* Inner hexagon */}
          <polygon
            className="hex-inner"
            points="100,30 170,67.5 170,142.5 100,180 30,142.5 30,67.5"
            fill="rgba(0,255,255,0.03)"
            stroke="url(#hexGrad)"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          {/* Initials */}
          <text
            x="100"
            y="120"
            textAnchor="middle"
            className="hex-text"
            fill="url(#hexGrad)"
            filter="url(#glow)"
          >
            DD
          </text>
          {/* Orbiting dot */}
          <circle className="orbit-dot" r="4" fill="#00ffff" filter="url(#glow)">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M100,10 L185,57.5 L185,152.5 L100,200 L15,152.5 L15,57.5 Z"
            />
          </circle>
        </svg>

        {/* Name with typing effect */}
        <h1 className={`logo-text ${showText ? 'visible' : ''}`}>
          <span className="text-gradient">Divyanshu Dubey</span>
        </h1>

        {/* Tagline */}
        <p className={`tagline ${showTagline ? 'visible' : ''}`}>
          AI Developer &bull; Full Stack Engineer &bull; Researcher
        </p>

        {/* Animated signature line */}
        <svg className="signature-line" viewBox="0 0 600 60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#00ffff" />
              <stop offset="70%" stopColor="#8000ff" />
              <stop offset="100%" stopColor="#8000ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,30 Q75,5 150,30 T300,30 T450,30 T600,30"
            fill="none"
            stroke="url(#sigGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
