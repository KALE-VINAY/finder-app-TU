import React from 'react'

const Hostel = ({ title, statusshop, imgUrl }) => {
  // Determine status color and icon based on statusshop
  const getStatusStyles = () => {
    switch(statusshop) {
      case 'Open':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: '🟢',
          borderColor: 'border-green-300'
        };
      case 'Closed':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          icon: '🔴',
          borderColor: 'border-red-300'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: '⚪',
          borderColor: 'border-gray-300'
        };
    }
  };

  const status = getStatusStyles();

  return (
    <a href='/browse' className="block">
      <div className={`
        relative 
        bg-white 
        rounded-lg 
        shadow-md 
        overflow-hidden 
        hover:shadow-lg 
        transition-all 
        duration-300 
        ease-in-out 
        border-2 
        ${status.borderColor}
      `}>
        {/* Image Section */}
        <div className="relative">
          <img 
            src={imgUrl} 
            alt={title} 
            className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          
          {/* Status Badge */}
          <div className={`
            absolute 
            top-2 
            right-2 
            px-3 
            py-1 
            rounded-full 
            text-sm 
            font-semibold 
            ${status.bgColor} 
            ${status.textColor}
            flex 
            items-center 
            space-x-2
          `}>
            <span>{status.icon}</span>
            <span>{statusshop}</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {title}
          </h3>
        </div>
      </div>
    </a>
  )
}

export default Hostel