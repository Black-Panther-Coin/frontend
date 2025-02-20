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

import NewHome from "./pages/HomePage/NewHome";

//const projectId = "45ff7348e614a721653a8d6d577b43da";


function App() {
  return (
    <LoginProvider>
    
    </LoginProvider>
  );
}

export default App;

