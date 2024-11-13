import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import Card from "./card";

const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card/>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card/>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card/>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card/>
          </div>
		  </div>
		  </div>
		<Footer/>		
		</>		
	);
};

export default Home;
