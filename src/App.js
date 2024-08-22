import React from "react";
import Header from "./components/Header/Header";
import AppRouter from "./routes/AppRoutes";
import SearchBar from "./components/SearchBar/SearchBar";
import InteractiveMap from "./components/InteractiveMap/InteractiveMap";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <InteractiveMap />
      <AppRouter />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
