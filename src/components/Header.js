// import React from 'react'
// import { useEffect } from 'react';
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth } from '../utils/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { addUser , removeUser } from '../utils/userSlice';
// import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
// import { toggleGptSearchView } from '../utils/gptSlice';
// import lang from '../utils/languageConstants';
// import { changeLanguage } from '../utils/configSlice';


// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector(store => store.user);
//   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


//   const handleSignOut = ()=>{


//     const auth = getAuth();
//     signOut(auth).then(() => {
//     }).catch((error) => {
//       navigate("/error");
//     });


//   };

//   useEffect(()=>{

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid , email , displayName , photoURL } = user;
//         dispatch(addUser({uid:uid , email:email , displayName:displayName ,photoURL:photoURL }));
//         navigate("/browse");
//         // ...
//       } else {
//         // User is signed out
//        dispatch(removeUser());
//        navigate("/");
//       }
//     });
// // unsubscribe when components unmounds 
//     return () => unsubscribe();

//   },[navigate,dispatch]);

//   const handleGptSearchClick = () => {
//     //togglr GPT search button
//     dispatch(toggleGptSearchView())

//   }
//   const handleLanguageChange =(e)=> {
//     // console.log(e.target.value);
//     dispatch(changeLanguage(e.target.value))

//   };

//   return (
//     <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex  flex-row md:flex-row justify-between '>


//   <img className = "bg-gradient-to-b from-black w-20  scroll-px-32 md:px-0 -m-2 md:m-0 md:w-44  " src = {LOGO}
//     alt= "logo"/>

//    {user && (<div className='flex  md:flex-row justify-between p-2'>

//     {showGptSearch && (<select className='px-2 py-2 mr-4 mx-1 mt-2 my-10 lg:my-0  bg-gray-900 text-white' onChange={handleLanguageChange}>
//       {SUPPORTED_LANGUAGES.map(lang => (<option key={lang.identifier} value={lang.identifier}>
//         {lang.name}
//         </option>))}
//     </select>)}

//     <button 
//     className='px-2 py-2 mr-4 md:mr-8 mx-1 mt-2 my-10 lg:my-5 bg-purple-800 text-white rounded-lg'
//     onClick={handleGptSearchClick}
//     >{showGptSearch ? "Homepage": "GPT SEARCH"}
//     </button>
//     <div className='flex flex-col -mr-8 md:-mr-4'>
//     <img alt="usericon" src= {user?.photoURL} className='h-10 w-10 ml-1 md:ml-4  rounded-full '/>
//       <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
//       </div>
//     </div>)
//     }
    


//   </div>
//   )
// }

// export default Header


// import React from 'react'
// import { useEffect } from 'react';
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth } from '../utils/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { addUser , removeUser } from '../utils/userSlice';
// import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';



// const Header = () => {
//   // const dispatch = useDispatch();
//   // const navigate = useNavigate();
//   const user = useSelector(store => store.user);


//   // const handleSignOut = () => {
//   //   const auth = getAuth();
//   //   signOut(auth).then(() => {
//   //     // Successfully signed out
//   //   }).catch((error) => {
//   //     navigate("/error");
//   //   });
//   // };

//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChanged(auth, (user) => {
//   //     if (user) {
//   //       const { uid, email, displayName, photoURL } = user;
//   //       dispatch(addUser({ uid, email, displayName, photoURL }));
//   //       navigate("/browse");
//   //     } else {
//   //       dispatch(removeUser());
//   //       navigate("/");
//   //     }
//   //   });
//   //   return () => unsubscribe();
//   // }, [navigate, dispatch]);

//   // bg-gradient-to-b from-black

//   return (
//     <div className='relative w-full px-4 py-3 bg-transparent z-10 flex flex-wrap justify-between items-center'>
      
//       <img className="w-16 md:w-24 " src="food_logo_f.png" alt="logo" />
//       <h1 className='text-5xl sm:block bg-gradient-to-b from-white md:block lg:block xl:block font-serif text-center hidden'>
//   TU Food App
// </h1>

//       {user && (
//         <div className='flex flex-wrap items-center'>
          
       

//           <div className='flex items-center ml-2'>
//             <img 
//               alt="usericon" 
//               src='https://tse4.mm.bing.net/th?id=OIP.vimlzIZtL-hZyrHwIJOApAHaFB&pid=Api&P=0&h=180' 
//               className='h-10 w-12 bg-transparent rounded-full' 
//             />
//             {/* <button 
//               onClick={handleSignOut} 
//               className='ml-2 text-black font-bold'>
//               Sign Out
//             </button> */}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((store) => store.user);

  return (
    <header className="relative w-full px-4 py-3 bg-transparent  z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-16 md:w-24" src="food_logo_f.png" alt="logo" />
          <h1 className="hidden md:block ml-4 text-2xl md:text-4xl font-serif font-bold text-gray-800">
            TU Food App
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${
            isMenuOpen ? "block mt-3" : "hidden"
          } absolute md:relative  top-16 md:top-0 left-0 w-full md:w-auto bg-gray-500 md:bg-transparent md:flex flex-col md:flex-row items-center`}
        >
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-green-900 px-4 py-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-green-900 px-4 py-2"
            to="/browse"
          >
            Browse Restaurants
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-green-900 px-4 py-2"
            to="/car-and-bike-rentals"
          >
            Car & Bike Rentals
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-green-900 px-4 py-2"
            to="/medical-services"
          >
            Medical Services
          </Link>
          <Link
            className="block text-lg font-medium text-gray-800 hover:text-green-900 px-4 py-2"
            to="/bus-timings"
          >
            Bus Schedule
          </Link>

          {/* User Section */}
        
        </nav>
      </div>
    </header>
  );
};

export default Header;
