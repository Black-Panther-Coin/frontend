import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./tailwind.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewHome from "./pages/HomePage/NewHome.jsx";
import { LoginProvider } from "./components/utils/provider.jsx";
import Dao from "./pages/Dao.jsx";

import LandingPage from "./pages/HomePage/landingPage.jsx";
import Lottery from "./pages/Lottery.jsx";
import Game from "./pages/Game.jsx";
import BuyToken from "./components/BuyTokens/BuyToken.jsx";
import PaymentFailed from "./components/BuyTokens/PaymentFailed.jsx";
import CountDown from "./components/CountDown/CountDown";
import About from "./pages/About.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NewHome />
  },
  {
    path: "/dao",
    element: <Dao />
  },
  {
    path: "/presale",
    element: <LandingPage />
  },
  {
    path: "/lottery",
    element: <Lottery />
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "/my_points",
    element: <BuyToken />
  },
  {
    path: "/failed_payment",
    element: <PaymentFailed />

  },
  {
    path: "/count",
    element: <CountDown />
  },
  {
    path: "/about",
    element: <About />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} >
        <ToastContainer />
      </RouterProvider>
    </LoginProvider>

  </React.StrictMode>
);
