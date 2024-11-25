import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Browse from './Browse';
// import Login from './Login';
import Browse from './Browse';
import Login from './Login';
// import RestaurantCard from './RestaurantCard';
// import RestaurantMenu from './RestaurantMenu';
import RestaurantWebsite from './RestaurantWebsite';
import LandingPage from './LandingPage';
import TravelAndTours from './TravelAndTours';
import CarAndBikeRentals from './CarAndBikeRentals';
import MedicalServices from './MedicalServices';
import SportsJersey from './SportsJersey';


const Body = () => {


const appRouter =createBrowserRouter(
    [
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        {
          path:"/restaurant/:id",
          element: <RestaurantWebsite/>
        },
        {
          path:"/travel-and-tours",
          element: <TravelAndTours />
        },
        {
          path:"/car-and-bike-rentals",
          element: <CarAndBikeRentals />
        },
        {
          path:"/medical-services",
          element: <MedicalServices />
        },
        {
          path:"/sports-jersey",
          element: <SportsJersey />
        },
        {
          path:"/landing-page",
          element: <LandingPage />
        }
    ]);


  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;