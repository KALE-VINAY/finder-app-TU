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


import React from 'react'
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser , removeUser } from '../utils/userSlice';
// import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';



const Mainheader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Successfully signed out
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/landing-page");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [navigate, dispatch]);

  // bg-gradient-to-b from-black

  return (
    <div className='relative w-full px-4 py-1 md:py-4 bg-transparent z-10 flex flex-wrap justify-between items-center'>
      <div className='flex flex-row '>
          <img className="h-14 w-16 -ml-2 md:ml-0  rounded" src="tuonestop.png" alt="logo" />
          <h1 className='text-xl md:text-3xl sm:block mt-1 md:mt-3 ml-3 md:block lg:block xl:block font-serif text-center hidden'>
          TU One Stop
          </h1>
      </div>
      

    

      {user && (
        <div className='flex flex-wrap items-center'>
          
       

          <div className='flex items-center ml-2'>
            <img 
              alt="usericon" 
              src={user?.photoURL} 
              className='h-8 w-8 rounded-full' 
            />
            <button 
              onClick={handleSignOut} 
              className='ml-2 text-white font-bold'>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Mainheader
