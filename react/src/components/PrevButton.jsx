import React, { useRef } from 'react';
import { gsap } from 'gsap';

const PrevButton = ({ link, text }) => {
  const svgRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(svgRef.current, {
      x: "+=8",
      ease: "linear.ease",
      yoyo: true,
      repeat: -1,
      duration: 0.6,
      startAt: { 
        x: "0"
      }
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(svgRef.current); // Останавливаем анимацию при уходе мыши
    gsap.set(svgRef.current, { x: 0 }); // Возвращаем начальное положение
  };
  const handleButtonClick = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElement = document.querySelector(link); // Находим элемент, к которому нужно прокрутить
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем до элемента с плавной анимацией
    }
  };
  return (
    <a 
      className="prev-button flex flex-row-reverse gap-4 justify-end px-16 py-8 items-center w-full text-3xl text-dark-green mt-auto" 
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick} 
    >
      {text}
      <svg
        ref={svgRef} 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-with-animation rotate-180"
      >
        <path d="M1.66669 19.9916H36.4584" stroke="#2B7A78" strokeWidth="2"/>
        <path d="M19.0634 37.3933L36.4584 20L19.0634 2.60498" stroke="#2B7A78" strokeWidth="2"/>
      </svg>
    </a>
  );
};

export default PrevButton;
