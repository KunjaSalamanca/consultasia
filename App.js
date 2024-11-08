import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Components/Landing';


const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onSwitch={() => setCurrentPage('login')}/>;
      case 'login':
        return <Login onSwitch={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onSwitch={() => setCurrentPage('login')} />;
      default:
        return <Login onSwitch={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
          {renderPage()}
    </PaperProvider>
  );
};


export default App;