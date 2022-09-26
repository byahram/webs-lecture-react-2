import React from "react";

function UnsplashItem({ unsplash }) {
  return (
    <li>
      <a href="/">
        <img
          className="unsplash_img"
          src={unsplash.urls.regular}
          alt={unsplash.desc}
        />
        <h2>{unsplash.user.name}</h2>
        <p>{unsplash.alt_description}</p>
      </a>
    </li>
  );
}

function UnsplashList({ unsplashes }) {
  // console.log(props);
  return (
    <div className="unsplash__list">
      <ul>
        {unsplashes.map((unsplashes, index) => (
          <UnsplashItem key={index} unsplash={unsplashes} />
        ))}
      </ul>
    </div>
  );
}

function UnsplashCont({ unsplashes }) {
  // console.log(unsplashes);
  return (
    <div className="unsplash__cont">
      <div className="container">
        <div className="unsplash__inner">
          <UnsplashList unsplashes={unsplashes} />
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
