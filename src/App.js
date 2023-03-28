import React from "react";

import { Routes, Route } from "react-router-dom";
import Faq from "./Components/Faq";
import Home from "./Components/Home";
import Pricing from "./Routes/Pricing";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>
    </div>
  );
}

export default App;
