'use client';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const scrollFunction = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener('scroll', scrollFunction);

    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <button
      type='button'
      data-te-ripple-init
      data-te-ripple-color='light'
      className={`!fixed bottom-5 right-5 opacity-60 md:opacity-100 md:bottom-20 md:right-5 bg-secondary rounded-full p-3 text-xs font-medium uppercase leading-tight text-blue-100 dark:text-secondary hover:text-secondary dark:hover:text-blue-100 shadow-md transition duration-150 ease-in-out dark:bg-blue-100 bg-popover hover:bg-blue-100 hover:shadow-lg dark:hover:bg-secondary dark:hover:shadow-lg focus:bg-blue-100 focus:shadow-lg focus:outline focus:ring-0 active:bg-blue-100 active:shadow-lg ${
        isVisible ? '' : 'hidden'
      }`}
      onClick={() => backToTop()}
    >
      <svg
        aria-hidden='true'
        focusable='false'
        data-prefix='fas'
        className='h-4 w-4'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path
          fill='currentColor'
          d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'
        ></path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
