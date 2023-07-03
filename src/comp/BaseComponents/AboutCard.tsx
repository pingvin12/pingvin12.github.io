import React from 'react';

const AboutCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-sm bg-white dark:bg-orange-400 shadow-lg rounded-lg overflow-hidden my-5">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2 dark:text-black">{description}</p>
      </div>
    </div>
  );
};

export default AboutCard;