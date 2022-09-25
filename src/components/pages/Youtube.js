import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../include/YoutubeCont";
import { useState } from "react";
import { useEffect } from "react";

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=day6%20live&key=AIzaSyAakHZ_FjmDH4JN6VZ05ECPU81uH6oSbmU&maxResults=30",
      requestOptions
    )
      .then((response) => response.json())
      // .then((result) => console.log(result.items))
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Api"]} />
        <YoutubeCont videos={videos} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
