import React from "react";

import { websiteText } from "../../data/website";
import { Link } from "react-router-dom";

const Website = () => {
  return (
    <section id="website">
      <h2>😮 웹디자인기능사 준비는 이걸로!</h2>
      <div className="video__inner">
        {websiteText.map((video, key) => (
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

export default Website;
