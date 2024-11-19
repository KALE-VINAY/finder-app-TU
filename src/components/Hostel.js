// 
import React from 'react'

const Hostel = ({ name, cuisines, price, rating, time, discount, imageUrl, promoted }) => {
  return (
    <a href='/browse'>
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          
         
          <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
          <div className="p-4">
            
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            
           
          </div>
        </div>
        </a>
  )
}

export default Hostel