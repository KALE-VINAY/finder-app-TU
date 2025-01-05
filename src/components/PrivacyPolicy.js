import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

//   const sections = [
//     {
//       id: 'collection',
//       title: '1. Information We Collect',
//       subsections: [
//         {
//           title: '1.1 Automatically Collected Information',
//           items: [
//             'IP addresses',
//             'Browser type',
//             'Device information',
//             'Access times and dates',
//             'Pages viewed'
//           ]
//         },
//         {
//           title: '1.2 User-Provided Information',
//           content: 'We do not collect or store personal identification information, payment information, university credentials, or private contact details.'
//         }
//       ]
//     },
//     {
//       id: 'usage',
//       title: '2. Information Usage',
//       content: 'We use collected information to improve website functionality, analyze user behavior, maintain service security, and debug technical issues.'
//     },
//     {
//       id: 'third-party',
//       title: '3. Third-Party Information',
//       subsections: [
//         {
//           title: '3.1 Listed Contact Information',
//           items: [
//             'Business and service provider contact details are collected from public sources',
//             'We do not verify or maintain this information',
//             'Users should verify all contact information independently',
//             'Report any incorrect or outdated information to us'
//           ]
//         },
//         {
//           title: '3.2 External Links',
//           items: [
//             'Our website contains links to external services and WhatsApp groups',
//             'We are not responsible for the privacy practices of these external services',
//             'Users should review the privacy policies of external services'
//           ]
//         }
//       ]
//     }
//     // Add remaining sections similarly
//   ];
const sections = [
    {
      id: 'collection',
      title: '1. Information We Collect',
      subsections: [
        // {
        //   title: '1.1 Automatically Collected Information',
        //   items: [
        //     'IP addresses',
        //     'Browser type',
        //     'Device information',
        //     'Access times and dates',
        //     'Pages viewed'
        //   ]
        // },
        {
          title: ' User-Provided Information',
          content:
            'We do not collect or store personal identification information, payment information, university credentials, or private contact details.'
        }
      ]
    },
    {
      id: 'usage',
      title: '2. Information Usage',
      content:
        'We use collected information to improve website functionality, analyze user behavior, maintain service security, and debug technical issues.'
    },
    {
      id: 'third-party',
      title: '3. Third-Party Information',
      subsections: [
        {
          title: '3.1 Listed Contact Information',
          items: [
            'Business and service provider contact details are collected from public sources',
            'We do not verify or maintain this information',
            'Users should verify all contact information independently',
            'Report any incorrect or outdated information to us'
          ]
        },
        {
          title: '3.2 External Links',
          items: [
            'Our website contains links to external services and WhatsApp groups',
            'We are not responsible for the privacy practices of these external services',
            'Users should review the privacy policies of external services'
          ]
        }
      ]
    },
    {
      id: 'security',
      title: '4. Data Security',
      content:
        'We implement standard security measures to protect our website. We do not store sensitive user information. We cannot guarantee the security of information shared with listed service providers.'
    },
    {
      id: 'rights',
      title: '5. User Rights',
      items: [
        'Request removal of any listed contact information belonging to you',
        'Report incorrect or outdated information',
        'Request information about our data practices'
      ]
    },
    {
      id: 'cookies',
      title: '6. Cookies',
      content:
        'We use essential cookies to improve website performance, analyze usage patterns, and enhance user experience. Users can disable cookies through their browser settings.'
    },
    {
      id: 'changes',
      title: '7. Changes to Privacy Policy',
      content:
        'We may update this policy at any time. Continued use of the website constitutes acceptance of policy changes.'
    },
    {
      id: 'contact',
      title: '8. Contact Information',
      content:
        'For questions, concerns, or information removal requests, contact: ecb20053@tezu.ac.in'
    },
    {
      id: 'governing-law',
      title: '9. Governing Law',
      content:
        'These terms and policies are governed by India State law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tezpur, Assam.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
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
                        {subsection.content && (
                          <p className="text-gray-600 mb-2">{subsection.content}</p>
                        )}
                        {subsection.items && (
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        )}
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

export default PrivacyPolicy;