import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Browse from './Browse';
// import Login from './Login';
import Browse from './Browse';
import Login from './Login';
// import RestaurantCard from './RestaurantCard';
// import RestaurantMenu from './RestaurantMenu';
import RestaurantWebsite from './RestaurantWebsite';


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
        }
    ]);


  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;