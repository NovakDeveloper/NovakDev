import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skill = ({ name, percentage }) => {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    // Анимация набора прогресса с нуля до заданного процента
    gsap.to(progressBar, {
      width: `${percentage}%`,
      duration: 2, // Продолжительность анимации в секундах
      ease: 'power2.out', // Эффект анимации (в данном случае, ускорение)
    });
  }, [percentage]);

  return (
    <div className="skill my-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="bg-light-green h-4 mt-2 rounded-full border border-dark-green">
        <div ref={progressBarRef} className="progress bg-dark-green h-full rounded-full" style={{ width: '0%' }}></div>
      </div>
    </div>
  );
};

export default Skill;
