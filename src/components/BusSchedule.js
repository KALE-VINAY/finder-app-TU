// import React, { useState, useEffect } from 'react';

// const BusSchedule = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [upcomingBuses, setUpcomingBuses] = useState([]);

//   // Simplified schedules for UI demonstration
//   const weekdaySchedule = [
//     { time: "6:00 AM", route: "Tribeni, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "8:20 AM", route: "Tribeni, Murhateteli, Vartak, Mazgaon, Dhanua Nagar, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "8:20 AM", route: "Railgate, Murhateteli, Vartak, Ketekibari, Mission Charali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "8:20 AM", route: "Idgah, Mahabhairab, Darrang College (East), Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "11:00 AM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "2:30 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "4:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
//     { time: "8:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },

//   ];

//   const weekendSchedule = [
//     { time: "6:00 AM", route: "Triben, Vartak", from: "ASTC", to: "Campus" },
//     { time: "10:30 AM", route: "Base Hospital", from: "ASTC", to: "Campus" },
//   ];

//   useEffect(() => {
//     const todaySchedule = weekdaySchedule; // Simplified for UI demo
//     const upcoming = todaySchedule.filter(bus => true); // Show all buses for UI
//     setUpcomingBuses(upcoming);
//   }, [currentTime]);

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4 text-center">University Bus Schedule</h1>
      
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold">Upcoming Buses</h2>
//         <ul className="mt-2">
//           {upcomingBuses.map((bus, index) => (
//             <li
//               key={index}
//               className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
//             >
//               <span>{bus.time}</span>
//               <span>{bus.route}</span>
//               <span>{bus.from} ➔ {bus.to}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold">Full Schedule</h2>
//         <ul className="mt-2">
//           {weekdaySchedule.map((bus, index) => (
//             <li
//               key={index}
//               className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
//             >
//               <span>{bus.time}</span>
//               <span>{bus.route}</span>
//               <span>{bus.from} ➔ {bus.to}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BusSchedule;
import React, { useState, useEffect } from 'react';
import HeaderRent from './HeaderRent';
import { Download } from 'lucide-react'; // Using lucide-react for the download icon

// Example holiday dates
const holidays = [
  "2024-12-25", // Christmas
  "2024-12-31", // New Year's Eve
  "2024-01-01", // New Year's Day
];

// Bus Schedule PDF URL
const BUS_SCHEDULE_PDF_URL = "https://firebasestorage.googleapis.com/v0/b/canteen-status-ce975.firebasestorage.app/o/BusSchedule.pdf?alt=media&token=afa8532f-786b-42bd-bcfc-f34e8190f684"; // Replace with your actual PDF URL

// [Previous schedule data remains the same]
const weekdayScheduleASTCToUni = [
  { time: "6:00 AM", route: "Tribeni, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:20 AM", route: "Tribeni, Murhateteli, Vartak, Mazgaon, Dhanua Nagar, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:20 AM", route: "Railgate, Murhateteli, Vartak, Ketekibari, Mission Charali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:20 AM", route: "Idgah, Mahabhairab, Darrang College (East), Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "11:00 AM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "2:30 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "4:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "7:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
];

const weekendScheduleASTCToUni = [
  { time: "6:00 AM", route: "Tribeni, Vartak, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "10:30 AM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "11:00 AM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "12:30 PM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "3:30 PM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "5:30 PM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "6:30 PM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "7:30 PM", route: "Triben, Vartak, Base Hospital", from: "ASTC", to: "Campus" },
  { time: "7:30 PM", route: "Tribeni, Vartak, Majgaon, Dhanua Nagar, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:00 PM", route: "Tribeni, Vartak, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
  { time: "8:30 PM", route: "Tribeni, Vartak, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
];

const weekdayScheduleUniToASTC = [
  { time: "6:00 AM", route: "Dolabari, Parowa, Mission Chariali,Tribeni", from: "Campus", to: "ASTC" },
  { time: "7:15 AM", route: "Dolabari, Parowa, Mission Chariali,Tribeni", from: "Campus", to: "ASTC" },
  { time: "9:30 AM", route: "Dolabari, Parowa, Base Hospital,Tribeni", from: "Campus", to: "ASTC" },
  { time: "1:45 PM", route: "Dolabari, Parowa, Base Hospital,Tribeni", from: "Campus", to: "ASTC" },
  { time: "3:00 PM", route: "Dolabari, Parowa, Base Hospital,Tribeni", from: "Campus", to: "ASTC" },
  { time: "4:40 PM", route: "Dolabari, Parowa, Base Hospital,Tribeni", from: "Campus", to: "ASTC" },
  { time: "5:40 PM", route: "Dolabari, Parowa, Dhanua Nagar, Mission Chariali, Vartak,Murhateteli, Tribeni", from: "Campus", to: "ASTC" },
  { time: "5:40 PM", route: "Dolabari, Parowa,Mission Chariali, Vartak,Murhateteli, Railgate", from: "Campus", to: "ASTC" },
  { time: "8:00 PM", route: "Dolabari, Parowa, Dhanua Nagar, Majgaon, Vartak, Tribeni", from: "Campus", to: "ASTC" },
];

const weekendScheduleUniToASTC = [
  { time: "6:00 AM", route: "Dolabari, Parowa, Mission Chariali, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "9:30 AM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "11:30 AM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "12:30 PM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "1:30 PM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "4:10 PM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "6:10 PM", route: "Dolabari, Parowa, Base Hospital, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "7:00 PM", route: "Dolabari, Parowa, Mission Chariali, Vartak, Tribeni", from: "Campus", to: "ASTC" },
  { time: "8:00 PM", route: "Dolabari, Parowa, Dhanua Nagar, Majgaon, Vartak, Tribeni", from: "ASTC", to: "Campus" },
  { time: "8:00 PM", route: "Dolabari, Parowa, Mission Chariali, Vartak, Tribeni", from: "ASTC", to: "Campus" },
  { time: "9:00 PM", route: "Dolabari, Parowa, Mission Chariali, Vartak, Tribeni", from: "ASTC", to: "Campus" },
];

const BusSchedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [upcomingBuses, setUpcomingBuses] = useState([]);
  const [activeTab, setActiveTab] = useState('ASTCToUni');

  // Days of the week for the day selector
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleDownloadPDF = () => {
    window.open(BUS_SCHEDULE_PDF_URL, '_blank');
  };

  const isHoliday = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    return holidays.includes(dateStr);
  };

  const getScheduleForDate = (date) => {
    const day = date.getDay();
    if (isHoliday(date) || day === 6 || day === 0) {
      return activeTab === 'ASTCToUni' 
        ? weekendScheduleASTCToUni 
        : weekendScheduleUniToASTC;
    } else {
      return activeTab === 'ASTCToUni' 
        ? weekdayScheduleASTCToUni 
        : weekdayScheduleUniToASTC;
    }
  };

  useEffect(() => {
    const schedule = getScheduleForDate(selectedDate);
    if (selectedDate.toDateString() === currentTime.toDateString()) {
      // Only show upcoming buses for today
      const now = currentTime;
      const upcoming = schedule.filter(bus => {
        const [hour, minutePart] = bus.time.split(":");
        const minutes = parseInt(minutePart.match(/\d+/)[0]);
        const isPM = bus.time.includes("PM");
        const busTime = new Date();
        busTime.setHours(isPM && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour));
        busTime.setMinutes(minutes);
        busTime.setSeconds(0);
        return busTime > now;
      });
      setUpcomingBuses(upcoming);
    } else {
      // Show all buses for selected date
      setUpcomingBuses([]);
    }
  }, [currentTime, activeTab, selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleDayChange = (e) => {
    const selectedDay = parseInt(e.target.value);
    const today = new Date();
    const diff = selectedDay - today.getDay();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + diff);
    setSelectedDate(newDate);
  };
  const BusScheduleItem = ({ bus }) => (
    <li className="flex flex-col md:flex-row justify-between p-2 bg-white shadow-md rounded-lg mb-2 gap-2">
      <span className="font-medium text-sm md:text-base">{bus.time}</span>
      <span className="text-sm md:text-base flex-1 text-center px-2">{bus.route}</span>
      <span className="text-sm md:text-base text-gray-600">{bus.from} ➔ {bus.to}</span>
    </li>
  );

  return (
    <>
    <HeaderRent/>
    <div className="p-2 md:p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
          University Bus Schedule
        </h1>
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
        >
          <Download className="w-4 h-4 md:w-5 md:h-5" />
          Bus Schedule PDF
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 my-3 md:my-5">
        <button 
          className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors ${
            activeTab === 'ASTCToUni' 
              ? 'bg-white text-red-600' 
              : 'bg-transparent border-2 border-white'
          }`}
          onClick={() => setActiveTab('ASTCToUni')}
        >
          ASTC TO University
        </button>
        <button 
          className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-colors ${
            activeTab === 'UniToASTC' 
              ? 'bg-white text-red-600' 
              : 'bg-transparent border-2 border-white'
          }`}
          onClick={() => setActiveTab('UniToASTC')}
        >
          University TO ASTC
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 my-4">
        <div className="flex items-center gap-2">
          <label className="text-sm md:text-base font-semibold">Date:</label>
          <input
            type="date"
            className="p-1.5 md:p-2 rounded border text-sm md:text-base w-full sm:w-auto"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm md:text-base font-semibold">Day:</label>
          <select
            className="p-1.5 md:p-2 rounded border text-sm md:text-base w-full sm:w-auto"
            value={selectedDate.getDay()}
            onChange={handleDayChange}
          >
            {daysOfWeek.map((day, index) => (
              <option key={day} value={index}>{day}</option>
            ))}
          </select>
        </div>
      </div>

      {selectedDate.toDateString() === currentTime.toDateString() && upcomingBuses.length > 0 && (
        <div className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Upcoming Buses</h2>
          <ul className="space-y-2">
            {upcomingBuses.map((bus, index) => (
              <BusScheduleItem key={index} bus={bus} />
            ))}
          </ul>
        </div>
      )}

      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Schedule for {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </h2>
        <ul className="space-y-2">
          {getScheduleForDate(selectedDate).map((bus, index) => (
            <BusScheduleItem key={index} bus={bus} />
          ))}
        </ul>
      </div>
    </div>
  </>
  );
};

export default BusSchedule;