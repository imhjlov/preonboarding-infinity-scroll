import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getCommentsThunk } from "../reducer/comments";

function FetchMore() {
  const dispatch = useDispatch();

  const fetchMoreTrigger = useRef(null);

  //* isIntersecting 시, 새로운 comments 정보 불러오기
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      dispatch(getCommentsThunk());
    }
  });

  //* Container div > IntersectionObserver 적용
  useEffect(() => {
    fetchMoreObserver.observe(fetchMoreTrigger.current);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current);
    };
  }, []);

  return <Container ref={fetchMoreTrigger}> FetchMore </Container>;
}

const Container = styled.div`
  opacity: 0;
`;

export default FetchMore;
