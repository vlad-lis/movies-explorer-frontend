/* eslint-env browser */
import { useState, useLayoutEffect } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', () => {
      setTimeout(() => { updateSize(); }, 1000);
    });
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
