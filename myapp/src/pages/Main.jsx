// import React from 'react';
import Dropdown from "../components/Dropdown";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Tools from "../components/Tools";

// /      <Banner />
const Main = () => {
  return (
    <div className="container bg-transparent w-4/6 mx-auto py-5 px-10 ">
      <Navbar />

      <Hero />
      <Tools />
      <Projects />
      <Dropdown />
      <Footer />
    </div>
  );
};

export default Main;
