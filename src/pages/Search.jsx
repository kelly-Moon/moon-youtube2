import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/section/Main";

import { fetchFromAPI } from "../utils/api";
import VideoSearch from "../components/video/VideoSearch";

const Search = () => {
  const { searchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setVideos([]); // 새 검색어 입력하면 기존 영상 초기화
    fetchVideos(searchId); // 새로운 검색어로 영상 요청
    setLoading(true); // 로딩 시작
  }, [searchId]);
  //searchId가 바뀌면(useParams로 URL에서 가져옴),

  const fetchVideos = (query, pageToken = "") => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {
        setNextPageToken(data.nextPageToken); // 다음 페이지 토큰 저장
        setVideos((prevVideo) => [...prevVideo, ...data.items]); // 기존 목록 뒤에 새 영상 이어 붙임,
        setLoading(false); // 로딩 완료
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchVideos(searchId, nextPageToken); // 저장해둔 토큰으로 다음 영상 가져오기
    }
  };

  const searchPageClass = loading ? "isLoading" : "isLoaded";
  return (
    <Main title="유투브 검색" description="유튜브 검색 결과 페이지입니다.">
      <section id="searchPage" className={searchPageClass}>
        <h2>
          <em>❤️ {searchId}</em>검색 결과입니다.
        </h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Search;
