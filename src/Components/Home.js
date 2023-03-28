import React from "react";
import Banner from "./Banner";
import "./HomeStyles.css";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Pricing/>
    </div>
  );
};

export default Home;
