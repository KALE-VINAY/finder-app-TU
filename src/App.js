// import logo from './logo.svg';

// import { Provider } from 'react-redux';
// import './App.css';
// import { AuthProvider } from './contexts/AuthContext';
// import Body from './components/Body'; 
// import appStore from './utils/appStore';



// function App() {
//   return (
  
//     <Provider store={appStore}>
//         <AuthProvider>
//     <Body/>
//     </AuthProvider>
//   </Provider>
    
//   );
// }

// 

// import { Provider } from 'react-redux';
// import appStore from './utils/appStore';
// import Body from './components/Body';

// function App() {
//   return (
//     <Provider store={appStore}>
//       <Body />
//     </Provider>
//   );
// }

// export default App;

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Body from './components/Body';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

function App() {
  return (
    <Provider store={appStore}>
      <AuthProvider> {/* Wrap with AuthProvider */}
        <Body />
      </AuthProvider>
    </Provider>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
