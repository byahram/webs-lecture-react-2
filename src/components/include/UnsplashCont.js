import React from "react";

function ImageItem(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.image.id}`}>
        <img
          src={props.image.urls.regular}
          alt={props.image.id}
          className="unsplash__img"
        />
      </a>
    </li>
  );
}

function UnsplashCont(props) {
  console.log(props);
  return (
    <div className="unsplash__cont">
      <div className="container">
        <div className="unsplash__list">
          <ul>
            {props.images.map((images, index) => (
              <ImageItem image={images} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
