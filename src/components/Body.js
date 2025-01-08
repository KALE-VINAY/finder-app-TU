// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// // import Browse from './Browse';
// // import Login from './Login';
// import Browse from './Browse';
// import Login from './Login';
// // import RestaurantCard from './RestaurantCard';
// // import RestaurantMenu from './RestaurantMenu';
// import RestaurantWebsite from './RestaurantWebsite';
// import LandingPage from './LandingPage';
// import TravelAndTours from './TravelAndTours';
// import CarAndBikeRentals from './CarAndBikeRentals';
// import MedicalServices from './MedicalServices';
// import SportsJersey from './SportsJersey';
// import BusSchedule from './BusSchedule';
// import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute

// const Body = () => {


// const appRouter =createBrowserRouter(
//     [
//         {
//             path:"/",
//             element: <Login/>
//         },
//         {
//             path:"/browse",
//             element: <Browse/>
//         },
//         {
//           path:"/restaurant/:id",
//           element: <RestaurantWebsite/>
//         },
//         {
//           path:"/travel-and-tours",
//           element: <TravelAndTours />
//         },
//         {
//           path:"/car-and-bike-rentals",
//           element: <CarAndBikeRentals />
//         },
//         {
//           path:"/medical-services",
//           element: <MedicalServices />
//         },
//         {
//           path:"/sports-jersey",
//           element: <SportsJersey />
//         },
//         {
//           path:"/landing-page",
//           element: <LandingPage />
//         },
//         {
//           path:"/bus-timings",
//           element: <BusSchedule/>
//         }
//     ]);


//   return (
//     <div>
//        <RouterProvider router={appRouter}/>
//     </div>
//   );
// };

// export default Body;
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import RestaurantWebsite from './RestaurantWebsite';
import LandingPage from './LandingPage';
import TravelAndTours from './TravelAndTours';
import CarAndBikeRentals from './CarAndBikeRentals';
import MedicalServices from './MedicalServices';
import SportsJersey from './SportsJersey';
import BusSchedule from './BusSchedule';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute
import CycleMarketplace from './CycleMarketplace';
import CycleList from './CycleList';
import SellCycleForm from './SellCycleForm';
import UniversityClubs from './UniversityClubs';
import ProductList from './ProductList';
import SellProductForm from './SellProductForm';
import RequestProductForm from './RequestProductForm';
import { useEffect } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser ,removeUser } from '../utils/userSlice';


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
      ,
    },
    {
      path: '/browse',
      element: (
        <ProtectedRoute>
          <Browse />
         </ProtectedRoute>
      ),
    },
    {
      path: '/restaurant/:id',
      element: (
         <ProtectedRoute>
          <RestaurantWebsite />
         </ProtectedRoute>
      ),
    },
    {
      path: '/travel-and-tours',
      element: (
         <ProtectedRoute>
          <TravelAndTours/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/car-and-bike-rentals',
      element: (
         <ProtectedRoute>
          <CarAndBikeRentals />
        /</ProtectedRoute>
      ),
    },
    {
      path: '/medical-services',
      element: (
         <ProtectedRoute>
          <MedicalServices />
         </ProtectedRoute>
      ),
    },
    {
      path: '/sports-jersey',
      element: (
         <ProtectedRoute>
          <SportsJersey />
         </ProtectedRoute>
      ),
    },
    {
      path: '/landing-page',
      element: (
         <ProtectedRoute>
          <LandingPage />
         </ProtectedRoute>
      ),
    },
    {
      path: '/bus-timings',
      element: (
         <ProtectedRoute>
          <BusSchedule />
         </ProtectedRoute>
      ),
    },
    {
      path: '/cycle-sale',
      element: (
         <ProtectedRoute>
          
          <CycleList/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/cycle-sell',
      element: (
         <ProtectedRoute>
       
          <SellCycleForm/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/buy-sell',
      element: (
         <ProtectedRoute>
       
          <ProductList/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/product-form',
      element: (
         <ProtectedRoute>
        
          <SellProductForm/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/request-form',
      element: (
         <ProtectedRoute>
        
          <RequestProductForm/>
         </ProtectedRoute>
      ),
    },
    {
      path: '/tu-clubs',
      element: (
         <ProtectedRoute>
          
          <UniversityClubs/>
         </ProtectedRoute>
      ),
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if user exists in localStorage on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser && !auth.currentUser) {
      const userData = JSON.parse(storedUser);
      dispatch(addUser(userData));
    }
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
