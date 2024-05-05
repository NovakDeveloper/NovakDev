import React from 'react';

const Labels = ({ titles }) => {
  // Преобразовываем строку titles в массив, разделяя ее по запятым
  const skillList = titles.split(',');

  return (
    <div className="group flex absolute bottom-6 right-6 gap-2">
      {/* Отображаем каждый скилл из массива */}
      {skillList.map((skill, index) => (
        <p key={index} className=" bg-dark-green border-dark-green border text-white py-1 px-2 rounded-full group-hover:bg-almost-white group-hover:text-dark-green" style={{ zIndex: index }}>
          {skill.trim()} {/* Удаляем лишние пробелы вокруг скилла */}
        </p>
      ))}
    </div>
  );
};

export default Labels;