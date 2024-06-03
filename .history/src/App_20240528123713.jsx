// import React from "react";
// import HomePage from "./pages/HomePage/homePage";

// import { createWeb3Modal } from "@web3modal/wagmi/react";

// import { WagmiConfig, createConfig, configureChains } from "wagmi";
// import { bsc } from "viem/chains";
// import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";
// import { publicProvider } from "wagmi/providers/public";
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import LandingPage from "./pages/HomePage/landingPage";

// // 1. Get projectId
// const projectId = "45ff7348e614a721653a8d6d577b43da";

// // 2. Create wagmiConfig
// const metadata = {
//   name: "Black Panther Token",
//   description: "This is black panther token v2.",
// };

// const usedChains = [bsc];

// const { chains, publicClient } = configureChains(usedChains, [
//   walletConnectProvider({ projectId }),
//   publicProvider(),
// ]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: [
//     new WalletConnectConnector({
//       chains,
//       options: { projectId, showQrModal: true, metadata },
//     }),
//     new EIP6963Connector({ chains }),
//     new InjectedConnector({ chains, options: { shimDisconnect: true } }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: { appName: metadata.name },
//     }),
//   ],
//   publicClient,
// });

// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains });

// function App() {
//   return (
//     <WagmiConfig config={wagmiConfig}>
//       <div className="h-screen">
//         <HomePage />
//         <LandingPage/>
//       </div>
//     </WagmiConfig>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import LandingPage from "./pages/HomePage/landingPage";

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { bsc } from "viem/chains";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const projectId = "45ff7348e614a721653a8d6d577b43da";
const metadata = {
  name: "Black Panther Token",
  description: "This is black panther token v2.",
};

const usedChains = [bsc];

const { chains, publicClient } = configureChains(usedChains, [
  walletConnectProvider({ projectId }),
  publicProvider(),
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: true, metadata },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
});

createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Router>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landing" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </WagmiConfig>
  );
}

export default App;

