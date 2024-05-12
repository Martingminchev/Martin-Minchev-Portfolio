import React, { useState, useEffect } from 'react';
const TypewritterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 100); 

    return () => clearInterval(interval);
  }, [text, currentIndex]);

  return (
    <p>{displayText}</p>
  );
};

export default TypewritterEffect