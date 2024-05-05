import React from 'react';
const handleButtonClick = (event, link ) => {
  event.preventDefault(); // Отменяем стандартное поведение ссылки
  const targetElement = document.querySelector(link); // Находим элемент, к которому нужно прокрутить
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем до элемента с плавной анимацией
  }
};
const MenuButton = ({ link, text }) => {
  return (
    <a onClick={(event) => handleButtonClick(event, link)} href={link} className="bg-almost-black text-white text-center py-2 px-4 rounded-full w-full block text-xl tracking-wider border-almost-black border hover:bg-almost-white hover:text-almost-black cursor-pointer">
        {text}
    </a>
  );
};

export default MenuButton;
