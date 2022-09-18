import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../include/YoutubeCont";

function Youtube() {
  return (
    <div>
      <Header />
      <Contents>
        <Title title={["Youtube", "Api"]} />
        <YoutubeCont />
        <Contact />
      </Contents>
      <Footer />
    </div>
  );
}

export default Youtube;
