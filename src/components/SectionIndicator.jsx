"use client";

import { useState, useEffect } from "react";

export default function SectionIndicator({ sectionsCount }) {
  const [activeSection, setActiveSection] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newActiveSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(newActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
      {Array.from({ length: sectionsCount }).map((_, index) => (
        <div 
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
            index === activeSection ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-300'
          }`}
          onClick={() => {
            window.scrollTo({
              top: index * window.innerHeight,
              behavior: 'smooth'
            });
          }}
        />
      ))}
    </div>
  );
} 