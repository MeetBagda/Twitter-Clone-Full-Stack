import React from 'react';
import { Link } from 'react-router-dom';

const SidebarOption = ({ active, text, Icon, to }) => {
  return (
    <Link to={to} className={`flex items-center space-x-2 p-3 hover:bg-gray-100 rounded-full cursor-pointer transition-colors duration-200 ${active ? 'font-bold' : 'font-medium'}`}>
      {Icon && <Icon className="h-6 w-6"/>}
      <h2 className="text-lg">{text}</h2>
    </Link>
  );
};

export default SidebarOption;