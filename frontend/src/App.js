import Payment from "./components/checkout/Payment";
import Completion from "./components/Completion";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;