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

// Example holiday dates
const holidays = [
  "2024-12-25", // Christmas
  "2024-12-31", // New Year's Eve
  "2024-01-01", // New Year's Day
  // Add more holiday dates here in "YYYY-MM-DD" format
];

// Weekday Schedule
const weekdayScheduleASTCToUni = [
      { time: "6:00 AM", route: "Tribeni, Mission Chariali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "8:20 AM", route: "Tribeni, Murhateteli, Vartak, Mazgaon, Dhanua Nagar, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "8:20 AM", route: "Railgate, Murhateteli, Vartak, Ketekibari, Mission Charali, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "8:20 AM", route: "Idgah, Mahabhairab, Darrang College (East), Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "11:00 AM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "2:30 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "4:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },
    { time: "8:00 PM", route: "Tribeni, Base Hospital, Parowa, Dolabari", from: "ASTC", to: "Campus" },

];

// Weekend & Holiday Schedule
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

  // Add all weekend entries here
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

// Weekend & Holiday Schedule
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

// Add all weekend entries here
];

const BusSchedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [upcomingBuses, setUpcomingBuses] = useState([]);
  const [activeTab, setActiveTab] = useState('ASTCToUni');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const isHoliday = () => {
    const today = currentTime.toISOString().split("T")[0];
    return holidays.includes(today);
  };

  const getTodaySchedule = () => {
    const day = currentTime.getDay();
    if (isHoliday() || day === 6 || day === 0) {
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
    const todaySchedule = getTodaySchedule();
    const now = currentTime;
    const upcoming = todaySchedule.filter(bus => {
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
  }, [currentTime, activeTab]);
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">University Bus Schedule</h1>
      <div className="flex justify-center gap-4">
            <button 
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'UniToASTC' 
                  ? 'bg-white text-red-600' 
                  : 'bg-transparent border-2 border-white'
              }`}
              onClick={() => setActiveTab('UniToASTC')}
            >
              {/* <Car className="inline-block mr-2 w-5 h-5" /> */}
              University TO ASTC
            </button>
            <button 
              className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                activeTab === 'ASTCToUni' 
                  ? 'bg-white text-red-600' 
                  : 'bg-transparent border-2 border-white'
              }`}
              onClick={() => setActiveTab('ASTCToUni')}
            >
              {/* <Bike className="inline-block mr-2 w-5 h-5" /> */}
              ASTC TO University
            </button>
          </div>
          {activeTab === 'ASTCToUni' && (
          <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Upcoming Buses</h2>
        {upcomingBuses.length > 0 ? (
          <ul className="mt-2">
            {upcomingBuses.map((bus, index) => (
              <li
                key={index}
                className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
              >
                <span>{bus.time}</span>
                <span>{bus.route}</span>
                <span>{bus.from} ➔ {bus.to}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">No upcoming buses.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold">Today Bus Schedule</h2>
        <ul className="mt-2">
          {getTodaySchedule().map((bus, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
            >
              <span>{bus.time}</span>
              <span>{bus.route}</span>
              <span>{bus.from} ➔ {bus.to}</span>
            </li>
          ))}
        </ul>
      </div>
      </>)}
      {activeTab === 'UniToASTC' && (
          <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Upcoming Buses</h2>
        {upcomingBuses.length > 0 ? (
          <ul className="mt-2">
            {upcomingBuses.map((bus, index) => (
              <li
                key={index}
                className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
              >
                <span>{bus.time}</span>
                <span>{bus.route}</span>
                <span>{bus.from} ➔ {bus.to}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">No upcoming buses.</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold">Today Bus Schedule</h2>
        <ul className="mt-2">
          {getTodaySchedule().map((bus, index) => (
            <li
              key={index}
              className="flex justify-between p-2 bg-white shadow-md rounded-lg mb-2"
            >
              <span>{bus.time}</span>
              <span>{bus.route}</span>
              <span>{bus.from} ➔ {bus.to}</span>
            </li>
          ))}
        </ul>
      </div>
      </>)}
    </div>
  );
};

export default BusSchedule;
