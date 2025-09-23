import React from "react";
import Main from "../components/section/Main";

import Today from "../components/contents_home/Today";
import Website from "../components/contents_home/Website";
import Developer from "../components/contents_home/Developer";
import Webd from "../components/contents_home/Webd";
import Gasp from "../components/contents_home/Gasp";
import Portfolio from "../components/contents_home/Portfolio";
import Youtube from "../components/contents_home/Youtube";

const Home = () => {
  return (
    <Main
      title="퍼니문 유튜브 채널"
      description="퍼니문의 유튜브에 오신것을 환영합니다."
    >
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gasp />
      <Portfolio />
      <Youtube />
    </Main>
  );
};

export default Home;
