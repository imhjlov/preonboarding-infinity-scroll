import { commentsAPI } from "../api";

//* Type
const GET_COMMENTS = "comment/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_FAILURE = "comment/GET_COMMENTS_FAILURE";

//* Action Function
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

//* Action Thunk Function
export const getCommentsThunk = () => async (dispatch, getState) => {
  dispatch(getComments());
  try {
    const currentPage = getState().comments.page;
    const { data } = await commentsAPI(currentPage);
    dispatch(getCommentsSuccess(data));
  } catch (error) {
    dispatch(getCommentsFailure(error));
  }
};

//* Initial State
const initialState = {
  page: 1,
  comments: [],
  loading: false,
  error: null,
};

//* Reducer
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
