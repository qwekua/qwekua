import React, { useEffect, useRef, useState } from 'react';

const ElevatorPitchSection = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    // Create intersection observer to detect when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.5, // trigger when 50% of the element is visible
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    // Clean up observer on component unmount
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section id="elevator-pitch" className="py-20 bg-[#0c1e3b]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Elevator Pitch</h2>
        <div className="bg-white/5 rounded-lg p-8 backdrop-blur-sm max-w-2xl mx-auto">
          {isVisible ? (
            <iframe
              className="w-full rounded aspect-video"
              src="https://www.youtube.com/embed/pud2BfQx_OM?autoplay=1"
              title="Elevator Pitch"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ref={videoRef}
            ></iframe>
          ) : (
            <div className="w-full rounded aspect-video bg-gray-800 flex items-center justify-center">
              <p className="text-gray-400">Scroll to view</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ElevatorPitchSection;