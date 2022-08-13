import { useEffect, useState } from "react";

export default function useIntervalImage(images, timeMs) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, timeMs);

    return () => clearInterval(intervalId);
  }, [currentIndex, images, timeMs]);

  return images[currentIndex];
};