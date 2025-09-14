import React, { useState } from "react";

import "./App.css";
// import Ourmenu from "./Components/ourmenu";
import Review from "./Components/review";
import Navbar from "./Components//Navbaar";
import Heropage from "./Components/Heropage";
import Ourmenu from "./Components/ourmenu";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Heropage />

      <Ourmenu />

      <Review/>

      <Footer/>
    </>
  );
}
