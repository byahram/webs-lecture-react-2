import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../include/UnsplashCont";

function Unsplash() {
  return (
    <div>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashCont />
        <Contact />
      </Contents>
      <Footer />
    </div>
  );
}

export default Unsplash;
