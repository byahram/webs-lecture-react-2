import React from "react";

function YoutubeItem({ video }) {
  return (
    <li>
      <a href="/">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <h2>{video.snippet.title}</h2>
        <p>{video.snippet.description}</p>
      </a>
    </li>
  );
}

function YoutubeList({ videos }) {
  // console.log(props);
  return (
    <div className="youtube__list">
      <ul>
        {videos.map((videos, index) => (
          <YoutubeItem key={index} video={videos} />
        ))}
      </ul>
    </div>
  );
}

function YoutubeCont({ videos }) {
  // console.log(videos);
  return (
    <div className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
          {/* <YoutubeSearch /> */}
          <YoutubeList videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default YoutubeCont;
