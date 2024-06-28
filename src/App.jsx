import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import LandingPage from "./pages/HomePage/landingPage";

import BuyToken from './components/BuyTokens/BuyToken';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


//const projectId = "45ff7348e614a721653a8d6d577b43da";


function App() {
  return (
    <Router>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/buytoken" element={<BuyToken />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

