import Axios from "axios";

//* axios baseURL 생성
const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//* axios - GET
//* page, limit값에 따른 comments 불러오는 API 함수
export const commentsAPI = (page = 1, limit = 10) => {
  return axios.get(`/comments`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export default axios;
