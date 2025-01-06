import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Modal from './Modal';


const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactInfo = {
    name: "Kale Vinay",
    position: "Website Owner",
    phone: "+91 6309862025",
    email: "ecb20053@tezu.ac.in",
    address: "tezpur university",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM"
  };

  return (
    <>
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        className="text-gray-400 hover:text-orange-400 transition-colors"
      >
        Contact Us
      </a>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {contactInfo.name}
              </h3>
              <p className="text-gray-600 mb-4">{contactInfo.position}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  {contactInfo.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-gray-700">
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;