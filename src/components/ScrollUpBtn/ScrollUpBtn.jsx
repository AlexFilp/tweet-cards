import React, { useState, useEffect } from 'react';
import { ScrollUpContainer, ScrollBtn, Button } from './ScrollUpBtn.styled';

export const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollUpContainer>
      {isVisible && (
        <Button
          className="animate__animated animate__backInRight"
          onClick={scrollToTop}
        >
          <ScrollBtn />
        </Button>
      )}
    </ScrollUpContainer>
  );
};
