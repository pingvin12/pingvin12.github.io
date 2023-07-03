import React from 'react';

const AchievementCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="max-w-sm bg-white dark:bg-gray-800 shadow-lg overflow-hidden my-5 w-[150px] h-[150px]">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 mt-2 dark:text-gray-300 ">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
