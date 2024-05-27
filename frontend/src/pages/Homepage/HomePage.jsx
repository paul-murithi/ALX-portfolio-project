import React from "react";
import Header from "../../Common/Header/Header";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import PopularRoutes from "./PopularRoutes/PopularRoutes";
import CTA from "./CTA/CTA";
import Testimonials from "./Testimmonials/Testimonials";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <PopularRoutes />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
};
export default HomePage;
