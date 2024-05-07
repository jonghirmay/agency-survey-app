import styles from './ResultsGraphics.module.scss'
import { useEffect, useState } from 'react';

export default function ResultsGraphics({ totalScore }) {
  const maxValue = 100;
  const radius = 50; // Radius of the circleto
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const [value, setValue] = useState(0);
  const strokeVal = (value / maxValue) * circumference; // How much of the circle to fill

  const outerCircleColor = () => {
    if(totalScore > 85) {
      return '#2DABE3'
    }else if(totalScore > 50 && totalScore <= 85) {
      return '#D88D36'
    }else {
      return '#D83636'
    }
  }


  useEffect(() => {
    const start = performance.now();
    const duration = 1000; // Milliseconds

    const animate = (now) => {
      const elapsedTime = now - start;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
      const currentValue = progress * totalScore;

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [totalScore]); // Dependency array includes totalScore to rerun animation when it changes

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke="#eee"
        strokeWidth="10"
      />
      <circle
        className={styles.outerCircle}
        cx="60"
        cy="60"
        r={radius}
        fill="none"
        stroke={outerCircleColor()}
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={circumference - strokeVal}
        transform="rotate(-90 60 60)"
        strokeLinecap="round"
      />
      <text x="60" y="65" fontSize="20" textAnchor="middle">{`${Math.round(value)}/${maxValue}`}</text>
    </svg>
  );
}