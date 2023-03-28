import React from "react";
import Banner from "./Banner";
import "./HomeStyles.css";
import Navbar from "./Navbar";
import Pricing from "./Pricing";
import Testimonials from "./Testimonial";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default Home;
