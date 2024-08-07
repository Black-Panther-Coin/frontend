import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import LandingPage from "./pages/HomePage/landingPage";

import BuyToken from './components/BuyTokens/BuyToken';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LoginProvider } from "./components/utils/provider";
import PaymentFailed from "./components/BuyTokens/PaymentFailed";
import CountDown from "./components/CountDown/CountDown";


//const projectId = "45ff7348e614a721653a8d6d577b43da";


function App() {
  return (
    <LoginProvider>
      <Router>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/my_points" element={<BuyToken />} />
            <Route path="/failed_payment" element={<PaymentFailed />} />
            <Route path="/count" element={<CountDown />} />
          </Routes>
        </div>
      </Router>
    </LoginProvider>
  );
}

export default App;

