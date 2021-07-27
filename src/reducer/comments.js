import { commentsAPI } from "../api";

//* TYPE
const GET_COMMENTS = "comment/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_FAILURE = "comment/GET_COMMENTS_FAILURE";

//* ACTION 함수
const getComments = () => ({
  type: GET_COMMENTS,
});

const getCommentsSuccess = (data) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: data,
});

const getCommentsFailure = (error) => ({
  type: GET_COMMENTS_FAILURE,
  payload: error,
});

//* ACTION THUNK - 함수
export const getCommentThunk =
  (page = 1) =>
  async (dispatch) => {
    dispatch(getComments());
    try {
      const { data } = await commentsAPI(page);
      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure(error));
    }
  };

//* 초기상태
const initialState = {
  page: 1,
  comments: [],
  loading: false,
  error: null,
};

//* 리듀서 생성
function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, loading: true };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        comments: state.comments.concat(action.payload),
        loading: false,
        error: null,
      };
    case GET_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default comments;
