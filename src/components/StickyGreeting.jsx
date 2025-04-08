import { useEffect, useRef, useState } from 'react';

const StickyGreeting = () => {
  const [showName, setShowName] = useState(false);
  const hideTimeout = useRef(null);
  const ctaRef = useRef(null);

  const toggleName = () => {
    const newState = !showName;
    setShowName(newState);

    clearTimeout(hideTimeout.current);
    if (newState) {
      hideTimeout.current = setTimeout(() => {
        setShowName(false);
      }, 5000);
    }
  };

  const handleClickOutside = (e) => {
    if (ctaRef.current && !ctaRef.current.contains(e.target)) {
      setShowName(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
      <div
        ref={ctaRef}
        onClick={(e) => {
          e.stopPropagation();
          toggleName();
        }}
        className={`group flex items-center bg-black text-white rounded-l-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out overflow-hidden
          ${showName
            ? 'pl-4 pr-6 py-2 w-[200px] sm:w-[260px] md:w-[300px]'
            : 'pl-3 pr-3 py-2 w-[60px] sm:w-[75px] md:w-[80px]'
          }`}
      >
        <span className="text-4xl sm:text-4xl md:text-5xl animate-wave">👋</span>
        <span
          className={`ml-2 sm:ml-3 md:ml-4 text-base sm:text-lg md:text-4xl font-semibold whitespace-nowrap transition-opacity duration-500 ease-in-out
          ${showName ? 'opacity-100' : 'opacity-0'}`}
        >
          Hi I’m Fikri
        </span>
      </div>
    </div>
  );
};

export default StickyGreeting;
