import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getCommentsThunk } from "../reducer/comments";

function InfinityScroll({ children }) {
  const dispatch = useDispatch();

  //* throttle 함수
  const throttle = (func, delay) => {
    let timeout = null;
    return function (...args) {
      if (!timeout) {
        timeout = setTimeout(() => {
          func.call(this, ...args);
          timeout = null;
        }, delay);
      }
    };
  };

  //* 화면 하단부까지 scroll되면, 새로운 comments 불러오기
  const _handleScroll = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } =
      document.documentElement || document.body;

    if (clientHeight + scrollTop === scrollHeight) {
      dispatch(getCommentsThunk());
    }
  }, 500);

  const handleScroll = useCallback(_handleScroll, [_handleScroll]);

  //* scroll event 등록 및 해제
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  //* 초기 렌더링 시, page=1 comment 불러오기
  useEffect(() => {
    dispatch(getCommentsThunk());
  }, [dispatch]);

  return <div>{children}</div>;
}

export default InfinityScroll;
