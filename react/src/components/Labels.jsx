import React from 'react';

const Labels = ({ labels }) => {
  // Преобразовываем строку labels в массив, разделяя ее по запятым
  const skillList = labels.split(',');

  return (
    <div className="group flex absolute bottom-6 right-6 gap-2">
      {/* Отображаем каждый скилл из массива */}
      {skillList.map((skill, index) => (
        <p key={index} className="text-[0.75rem] bg-dark-green border-dark-green border text-white py-1 px-2 rounded-full group-hover:bg-almost-white group-hover:text-dark-green" style={{ zIndex: index }}>
          {skill.trim()} {/* Удаляем лишние пробелы вокруг скилла */}
        </p>
      ))}
    </div>
  );
};

export default Labels;