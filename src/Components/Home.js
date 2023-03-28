import React from "react";
import Banner from "./Banner";
import Faq from "./Faq";
import Footer from "./Footer";
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
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
