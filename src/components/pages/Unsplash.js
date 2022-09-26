import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import UnsplashCont from "../include/UnsplashCont";
import { useState } from "react";
import { useEffect } from "react";

function Unsplash() {
  const [unsplashes, setUnsplashes] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/search/photos?query=roadtrip&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUnsplashes(result.results);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <UnsplashCont unsplashes={unsplashes} />
        <Contact />
      </Contents>
      <Footer />
    </div>
  );
}

export default Unsplash;
