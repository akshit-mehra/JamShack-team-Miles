import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar";
import "./Home.css";
import Footer from "../components/Footer/Footer";
import Sell from "../components/Sell/Sell";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      <Sell/>
      <Footer />
    </div>
  );
};

export default Home;
