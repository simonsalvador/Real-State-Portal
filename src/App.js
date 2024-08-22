import React from 'react';
import Header from './components/Header/Header';
import AppRouter from './routes/AppRoutes';
import SearchBar from './components/SearchBar/SearchBar'; 
import InteractiveMap from './components/InteractiveMap/InteractiveMap'; 

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <InteractiveMap />
      <AppRouter />
    </div>
  );
}

export default App;
