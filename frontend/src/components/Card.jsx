import React from 'react';

const Card = ({ icon: Icon, title, value, gradientStart = 'bg-gradient-to-r from-indigo-400 to-indigo-600' }) => {
    return (
      <div className={`w-full sm:w-64 p-4 flex items-center space-x-4 rounded-md ${gradientStart} text-white`}>
        <Icon className="text-2xl" />
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
    );
  };
  

export default Card;
