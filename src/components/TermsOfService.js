import React, { useState } from 'react';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { 
      id: 'notice', 
      title: '1. Important Notice - Unofficial Website',
      content: 'This website is a personal project and is NOT an official website of [University Name]. This is an independent platform created by a student to aggregate information about services around the university area. We are not affiliated with, endorsed by, or connected to the university administration in any official capacity.'
    },
    {
      id: 'disclaimer',
      title: '2. Disclaimer of Information Accuracy',
      subsections: [
        {
          title: '2.1 Third-Party Information',
          items: [
            'All contact numbers, service details, and business information provided on this website are collected from publicly available sources',
            'None of the listed services or contact information is officially verified or authorized by the university',
            'We do not guarantee the accuracy, reliability, or legitimacy of any information provided',
            'Users access and use the provided information at their own risk'
          ]
        },
        {
          title: '2.2 User Responsibility',
          items: [
            'You will verify all information independently before making any decisions',
            'You will conduct your own due diligence before engaging with any listed service providers',
            'You are solely responsible for any transactions or interactions with the listed service providers',
            'We are not responsible for any disputes, accidents, losses, or damages arising from using the information provided'
          ]
        }
      ]
    },
    {
      id: 'scope',
      title: '3. Scope of Services',
      content: 'This website provides information about campus area restaurants and food services, transportation services, medical services, second-hand cycle sales, sports merchandise and department clothing, university club communication channels, and other student-relevant services.'
    },
    // Add remaining sections similarly
    {
        id: 'liability',
        title: '4. N0 Liability',
        // content: 'This website is a personal project and is NOT an official website of [University Name]. This is an independent platform created by a student to aggregate information about services around the university area. We are not affiliated with, endorsed by, or connected to the university administration in any official capacity.',
        subsections: [
          {
            title: '4.1 We expressly disclaim any liability for:',
            items: [
              
              'Quality of services provided by listed businesses',
              'Accuracy of menu items or prices',
              'Reliability of transportation services',
              'Condition of second-hand items',
              'Authenticity of contact information',
              'Validity of WhatsApp group links',
            ]
          },
          {
            title: '4.2 Transactions',
            items: [
              'We are not a party to any transaction between users and service providers',
                'We do not verify the legitimacy of any sellers or service providers',
                'We do not mediate disputes between users and service providers',
                'We are not responsible for any financial losses or fraud' ]
                        }
        ]
      },
      
    {
      id: 'Prohibited',
      title: '5. Prohibited Uses',
      content: 'Users may not:- Misrepresent the website as an official university platform Scrape or collect information for commercial purposes Harass or spam listed service providers Share or sell the aggregated information Use the platform for illegal activities'
      },
      {
        id: 'IP',
        title: '6. Intellectual Property',
        content: 'All website content and design elements are owned by the website creator Users may not copy, reproduce, or distribute the content without permission Listed business information is publicly available and not claimed as proprietary'
        },
        {
            id: 'Modifications',
            title: '7. Modifications',
            content: 'We reserve the right to:  Modify or remove any information without notice ,Update these terms at any time , Discontinue the service without prior notice'
            },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-gray-600">Last Updated: [5/01/2025]</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contents</h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block px-3 py-2 text-sm rounded-md ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-8">
              <div className="space-y-8">
                {sections.map((section) => (
                  <div key={section.id} id={section.id}>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    {section.content && (
                      <p className="text-gray-600 mb-4">{section.content}</p>
                    )}
                    {section.subsections && section.subsections.map((subsection, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {subsection.title}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;