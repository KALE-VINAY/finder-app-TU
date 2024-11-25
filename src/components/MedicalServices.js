import React from 'react';
import { Phone, Clock, Truck, AlertCircle } from 'lucide-react';

const MedicalServices = () => {
  const medicalShops = [
    {
      name: "Campus Pharmacy",
      location: "Near Main Gate",
      contact: "+1-234-567-8900",
      deliveryHours: "9:00 AM - 9:00 PM",
      deliveryNote: "Free delivery for orders above $10"
    },
    {
      name: "Student Health Store",
      location: "Student Center",
      contact: "+1-234-567-8901",
      deliveryHours: "10:00 AM - 8:00 PM",
      deliveryNote: "Free delivery for all prescriptions"
    }
  ];

  const healthCenterTimings = {
    weekdays: "8:00 AM - 10:00 PM",
    weekends: "9:00 AM - 6:00 PM",
    holidays: "9:00 AM - 5:00 PM"
  };

  const emergencyContacts = [
    { title: "Campus Emergency", number: "911" },
    { title: "Health Center Emergency", number: "+1-234-567-8902" },
    { title: "Campus Security", number: "+1-234-567-8903" },
    { title: "Mental Health Helpline", number: "+1-234-567-8904" }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Campus Medical Services</h1>
          <p className="text-green-600">Your health is our priority</p>
        </div>

        {/* Emergency Contacts Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center text-red-800 text-xl font-semibold mb-4">
            <AlertCircle className="mr-2" />
            Emergency Contacts
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-700">{contact.title}</span>
                <a href={`tel:${contact.number}`} className="flex items-center text-red-600 hover:text-red-800">
                  <Phone className="w-4 h-4 mr-2" />
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Health Center Timings */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center text-green-800 text-xl font-semibold mb-4">
            <Clock className="mr-2" />
            Health Center Timings
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-semibold mb-2 text-green-700">Weekdays</div>
              <div className="flex items-center text-green-600">
                <Clock className="w-4 h-4 mr-2" />
                {healthCenterTimings.weekdays}
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-semibold mb-2 text-green-700">Weekends</div>
              <div className="flex items-center text-green-600">
                <Clock className="w-4 h-4 mr-2" />
                {healthCenterTimings.weekends}
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-semibold mb-2 text-green-700">Holidays</div>
              <div className="flex items-center text-green-600">
                <Clock className="w-4 h-4 mr-2" />
                {healthCenterTimings.holidays}
              </div>
            </div>
          </div>
        </div>

        {/* Medical Shops */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center text-green-800 text-xl font-semibold mb-4">
            <Truck className="mr-2" />
            Medical Shops with Hostel Delivery
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {medicalShops.map((shop, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-green-800 mb-2">{shop.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="text-sm">📍 {shop.location}</p>
                  <p className="text-sm flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href={`tel:${shop.contact}`} className="hover:text-green-700">
                      {shop.contact}
                    </a>
                  </p>
                  <p className="text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {shop.deliveryHours}
                  </p>
                  <p className="text-sm text-green-600 font-medium">{shop.deliveryNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-600 mt-8">
          <p>For non-emergency medical advice, please visit the health center during operating hours.</p>
          <p className="mt-2">Remember to carry your student ID card when visiting the health center or medical shops.</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;