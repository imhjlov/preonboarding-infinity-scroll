import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getCommentsThunk } from "../reducer/comments";

function FetchMore() {
  const dispatch = useDispatch();

  //* Container div에 접근하기 위해 useRef 생성
  const fetchMoreTrigger = useRef(null);

  //* 화면에 Container div가 보일 경우, 새로운 comments 정보 불러오기
  const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) {
      dispatch(getCommentsThunk());
    }
  });

  //* 마운트시 ref에 IntersectionObserver observe 적용
  //* 언마운트시 ref에 IntersectionObserver unobserve 적용
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
