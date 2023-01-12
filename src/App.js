import logo from "./logo.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Vesting from "./pages/vesting/vesting";
import Staking from "./pages/staking/staking";
import Layout from "./components/layout/layout";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vesting" element={<Vesting />} />
          <Route path="/staking" element={<Staking />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
