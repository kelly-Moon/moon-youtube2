import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

const options = {
  params: {
    maxResults: 48,
    key: process.env.REACT_APP_YOUTUBE_API_KEY, // 환경변수에서 불러오기
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error;
  }
};
