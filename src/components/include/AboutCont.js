import React from "react";

function AboutInfo(props) {
  return (
    <div className="about">
      <div className="about__txt">
        <h3>{props.title}</h3>
        <h3>{props.desc}</h3>
      </div>
      <div className="about__img">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
}

const aboutText = [
  {
    title: "유튜브 API",
    desc: "유튜브에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663431261831-adea08686cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "TMDB API",
    desc: "TMDB에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663431905837-09cf339461ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Unsplash API",
    desc: "Unsplash에서 제공하는 API를 가져와서 작업했습니다.",
    img: "https://images.unsplash.com/photo-1663243489477-24fdf4ead768?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

function AboutCont() {
  return (
    <section className="about__cont">
      <div className="container">
        <div className="about__inner">
          {aboutText.map((txt) => (
            <AboutInfo
              key={txt.title}
              title={txt.title}
              desc={txt.desc}
              img={txt.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCont;
