import React from "react";
import { gsapText } from "../../data/gsap";
import { Link } from "react-router-dom";

const Gasp = () => {
  return (
    <section id="gsap">
      <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
      <div className="video__inner">
        {gsapText.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gasp;
