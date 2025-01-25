import React, { useState, useEffect } from 'react';
import { ExternalLink, Search, Users, ChevronDown, ArrowUpCircle } from 'lucide-react';

const UniversityClubs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
// Add this useEffect to scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 200px
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const clubs = [
    {
      name: "Photography Club",
      description: "Explore the art of photography, learn camera techniques, participate in photo walks, and showcase your work through exhibitions. Perfect for both beginners and experienced photographers!",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/D0fgz2kPuuq5QXFZMxrrpm",
      category: "Creative Arts",
      memberCount: 120
    },
    {
      name: "Fine Arts Club TU",
      description: "Express yourself through painting, sketching, and various art forms. Join workshops, participate in exhibitions, and collaborate with fellow artists to create beautiful artwork.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/DsTtZGm0F9vJRrJNUUmcAa",
      category: "Creative Arts",
      memberCount: 120
    },
    {
      name: "Dance Club",
      description: "Learn various dance forms from classical to contemporary. Regular workshops, performances, and opportunities to showcase your talent at university events.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/Huwko9fV9Lz1CpH44mjUcr",
      category: "Performing Arts",
      memberCount: 85
    },
    {
      name: "TU OTAKU CLUB 💢",
      description: "Dive into the world of anime and manga. Join discussions, watch parties, cosplay events, and connect with fellow otakus. Celebrate Japanese culture and creativity with like-minded fans.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/F7jrJ1q6J6GLRUKhfchoHo",
      category: "Anime & Manga",
      memberCount: 230
    },
    {
      name: "TU - Yoga Club",
      description: "Practice yoga for physical and mental wellness. Regular sessions for meditation, asanas, and breathing exercises. Open to all skill levels with certified instructors.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/LthtQsN63h6046U2YgvR2H",
      category: "Wellness",
      memberCount: 65
    },
    {
      name: "TU -Taekwondo Club 🥋",
      description: "Learn self-defense, discipline, and physical fitness through Taekwondo. Regular training sessions, belt promotions, and opportunities to participate in competitions.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/LIyWeIYSS0N6wE2TlD6MPc",
      category: "Martial Arts",
      memberCount: 200
    },
    {
      name: "TU Drama Club",
      description: "Discover your acting talents, participate in theatrical productions, and learn stage craft. Regular workshops on acting, direction, and script writing.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/LR9FWFHkQgA6LXF1sKP6fe",
      category: "Performing Arts",
      memberCount: 95
    },
    {
      name: "Music Club",
      description: "For music enthusiasts - vocalists and instrumentalists alike. Regular jam sessions, performances, and opportunities to learn various instruments and musical styles.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/CI0FpaUyDd89OZmTdNzafw",
      category: "Performing Arts",
      memberCount: 95
    },
    {
      name: "Table Tennis (TU)",
      description: "Practice and compete in table tennis. Regular practice sessions, intra-university tournaments, and opportunities to represent TU in competitions.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/BrIoatA6pfHJsrsJIXO5o7",
      category: "Sports",
      memberCount: 200
    },
    {
      name: "ARM WRESTLING CLUB",
      description: "Train in arm wrestling techniques, strength building, and competition strategies. Regular practice sessions and participation in tournaments.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/BgYJqMkj5TH4bZXENZkEzQ",
      category: "Sports",
      memberCount: 150
    },
    {
      name: "TU Kabaddi Club",
      description: "Learn and practice traditional Kabaddi. Regular training sessions, team building activities, and participation in inter-college tournaments.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/J2eQvLczOcPC7LTqX0M6YZ",
      category: "Sports",
      memberCount: 180
    },
    {
      name: "TU Tennis Club (Official)",
      description: "Join for tennis coaching, practice sessions, and tournaments. All skill levels welcome with opportunities for competitive play.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/CwG1H8awjBmEPlXw7Qs6TQ",
      category: "Sports",
      memberCount: 160
    },
    {
      name: "T.U. Chess Club ♟️",
      description: "Develop your chess strategies, participate in tournaments, and learn from experienced players. Regular practice sessions and chess workshops.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/FjIojPHnAhnIQwRR92BBH0",
      category: "Indoor Games",
      memberCount: 140
    },
    {
      name: "MCJ Screening TU",
      description: "For Mass Communication enthusiasts. Regular film screenings, discussions, and workshops on media analysis and journalism.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/CeeVplexyms5bJltBX35oB",
      category: "Media",
      memberCount: 120
    },
    {
      name: "GDGC TU",
      description: "Google Developer Group Community. Learn about latest technologies, participate in workshops, hackathons, and connect with tech enthusiasts.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/FuluGFumDGu6cu2h6sXXs5",
      category: "Technology",
      memberCount: 250
    },
    {
      name: "TU cricket stars🌟",
      description: "Join for cricket practice, matches, and tournaments. Regular practice sessions and opportunities to represent TU in tournaments.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/CFhKhEyaIzoLrvwUDE74I3",
      category: "Sports",
      memberCount: 220
    },
    {
      name: "TEZPUR UNIVERSITY DEVELOPERS POOL🧑‍💻",
      description: "Community for coding enthusiasts. Regular coding sessions, project collaborations, hackathons, and technical workshops.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/CPmOj8wLgXABHFdBSfGO5K",
      category: "Technology",
      memberCount: 300
    },
    {
      name: "Basketball club TU",
      description: "Practice basketball, improve your game, and participate in tournaments. Regular training sessions and friendly matches.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/D7Qr2t74p4j8hKHKdqtZI4",
      category: "Sports",
      memberCount: 160
    },
    {
      name: "TUFC ⚽",
      description: "Tezpur University Football Club. Regular practice sessions, matches, and opportunities to represent TU in tournaments.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/EAY7m6aqPbyBH8GSddGQxP",
      category: "Sports",
      memberCount: 200
    },
    {
      name: "BADMINTON CLUB 2024🏸",
      description: "Join for badminton practice, tournaments, and skill development. Regular coaching sessions for all skill levels.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/KoeVSau0hBP80IW02mOQqj",
      category: "Sports",
      memberCount: 180
    },
    {
      name: "Astronomy Club TU",
      description: "Explore the cosmos through stargazing sessions, astronomy workshops, and space science discussions. Regular observation nights and educational events.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/FZphAAmwzpC8Wo2THzPRUz",
      category: "Science",
      memberCount: 150
    },
    {
      name: "TU Film Society",
      description: "Watch and discuss classic and contemporary films. Regular screenings, film analysis sessions, and workshops on filmmaking.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/D7XqWW92axiBxu0K4TP3cu",
      category: "Media",
      memberCount: 140
    },
    {
        name: "TU Astronomy Club III",
        description: "Explore the cosmos through stargazing sessions, astronomy workshops, and space science discussions. Regular observation nights and educational events.",
        logo: "/api/placeholder/100/100",
        whatsappLink: "https://chat.whatsapp.com/Ecc3VkfrRqYAKyzPYehdr7",
        category: "Science",
        memberCount: 200
      },
      {
        name: "TU Book Club",
        description: "Dive into the world of literature with book discussions, author meetups, and group reading sessions. Perfect for avid readers and literary enthusiasts.",
        logo: "/api/placeholder/100/100",
        whatsappLink: "https://chat.whatsapp.com/LRBb7alvjXP5R8G5kJ6yFw",
        category: "Literature",
        memberCount: 200
      },
      {
        name: "TU Poetry Club ✍🏼✨",
        description: "Celebrate the art of poetry with open mic nights, creative writing workshops, and poetry slams. A haven for budding poets and wordsmiths.",
        logo: "/api/placeholder/100/100",
        whatsappLink: "https://chat.whatsapp.com/FIh5aUwZJ0N732jVqFoBsr",
        category: "Arts",
        memberCount: 200
      },
      {
        name: "LITERARY CLUB, TU",
        description: "Foster a love for language and storytelling with literary debates, writing competitions, and creative showcases. A community for literary minds.",
        logo: "/api/placeholder/100/100",
        whatsappLink: "https://chat.whatsapp.com/Huadq4uzQOf4mVfnUhd9Uf",
        category: "Literature",
        memberCount: 200
      },
      {
        name: "DEBATE CLUB, TU",
        description: "Sharpen your public speaking and critical thinking skills through engaging debates, speech contests, and panel discussions. A platform for articulate minds.",
        logo: "/api/placeholder/100/100",
        whatsappLink: "https://chat.whatsapp.com/HxspeHcj8wrBBHYXdx4xMs",
        category: "Public Speaking",
        memberCount: 200
      },
    {
      name: "TU Cycling Club (TUCYC)",
      description: "Experience thrilling outdoor activities including hiking, rock climbing, mountain biking, and camping. Learn survival skills and explore nature while building leadership and teamwork abilities.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/EirVN7rKEb62aCgZz7KwHT",
      category: "Sports",
      memberCount: 150
    },
    {
      name: "Robotics Club",
      description: "Design, build, and program robots through hands-on projects. Learn about electronics, mechanics, and automation while participating in robotics competitions and workshops.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/GrdSyCv0MFtJ20j60oudzn",
      category: "Technology",
      memberCount: 95
    },
    {
      name: "Open Knowledge Club",
      description: "Share and gain knowledge across various disciplines through discussions, presentations, and collaborative learning. A platform for intellectual exchange and interdisciplinary exploration.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/JUzSYUe6zz9K7VKCCEciqM",
      category: "Education",
      memberCount: 110
    },
    {
      name: "Book Club",
      description: "Connect with fellow book lovers, engage in literary discussions, and explore diverse genres. Regular book reviews, reading sessions, and literary events.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/LRBb7alvjXP5R8G5kJ6yFw",
      category: "Literature",
      memberCount: 75
    },
    {
      name: "Philately Club",
      description: "Discover the fascinating world of stamp collecting. Learn about postal history, rare stamps, and collection techniques. Regular exhibitions and stamp exchange meets.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/Kov4ZvWczTJIZJm9j2lSKV",
      category: "Collectibles",
      memberCount: 45
    },
    {
      name: "Biodiversity Club",
      description: "Explore and preserve local flora and fauna. Participate in nature walks, conservation projects, and environmental awareness campaigns. Learn about ecosystems and sustainability.",
      logo: "/api/placeholder/100/100",
      whatsappLink: "https://chat.whatsapp.com/IcTEFr4WwjAE60S1W83crA",
      category: "Environment",
      memberCount: 88
    }
    
  ];

  const categories = ['All', ...new Set(clubs.map(club => club.category))].sort();

  const filteredClubs = clubs.filter(club => {
    const matchesCategory = selectedCategory === 'All' || club.category === selectedCategory;
    const matchesSearch = club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            University Clubs
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and join our vibrant community of student clubs and organizations
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search clubs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-9/12 sm:w-64">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 py-2 text-left bg-white border border-gray-200 rounded-lg flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-gray-700">{selectedCategory}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-150 ${
                        selectedCategory === category ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClubs.map((club, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    {/* <img
                      src={club.logo}
                      alt={`${club.name} logo`}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm"
                    /> */}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{club.name}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{club.memberCount} members</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-sm sm:text-base line-clamp-3">
                  {club.description}
                </p>

                <a
                  href={club.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center w-full px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span>Join on WhatsApp</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No clubs found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-900 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default UniversityClubs;