import React from "react";
import Main from "../components/section/Main";

import Today from "../components/contents_home/Today";
// import Website from "../components/contents_home/Website";
import Developer from "../components/contents_home/Developer";
// import Webd from "../components/contents_home/Webd";
// import Gasp from "../components/contents_home/Gasp";
// import Portfolio from "../components/contents_home/Portfolio";
// import Youtube from "../components/contents_home/Youtube";
import VideoSlider from "../components/video/VideoSlider";

import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { portfolioText } from "../data/portfolio";
import { youtubeText } from "../data/youtube";
import { developerText } from "../data/developer";
import { todayText } from "../data/today";

const Home = () => {
  return (
    <Main
      title="퍼니문 유튜브 채널"
      description="퍼니문의 유튜브에 오신것을 환영합니다."
    >
      <Today id="taday" videos={todayText} />
      <Developer
        id="developer"
        title="🤡 추천 개발자들을 소개합니다"
        videos={developerText}
      />
      <VideoSlider
        id="webd"
        title="👽 웹디자인기능사 한번에 따자!"
        videos={webdText}
      />
      <VideoSlider
        id="website"
        title="🦄 웹디자인기능사 준비는 이걸로!"
        videos={websiteText}
      />
      <VideoSlider
        id="gsap"
        title="👩‍👩‍👧‍👧 창의적 사이트를 만들고 싶다면!"
        videos={gsapText}
      />
      <VideoSlider
        id="portfolio"
        title="🎅 나만의 포트폴리오 사이를 만들고 싶다면."
        videos={portfolioText}
      />
      <VideoSlider
        id="youtube"
        title="🍗 나만의 유튜브 사이트 만들기"
        videos={youtubeText}
      />
    </Main>
  );
};

export default Home;
