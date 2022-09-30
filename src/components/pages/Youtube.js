import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSearch from "../include/YoutubeSearch";
import { useState, useEffect } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);

  const search = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAakHZ_FjmDH4JN6VZ05ECPU81uH6oSbmU&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items));
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=johnk&key=AIzaSyAakHZ_FjmDH4JN6VZ05ECPU81uH6oSbmU&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Api"]} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
