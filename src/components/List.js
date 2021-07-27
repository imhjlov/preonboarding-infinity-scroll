import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { getCommentThunk } from "../reducer/comments";

import Item from "./Item";

function List() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getCommentThunk());
  }, [dispatch]);

  return (
    <Container>
      {comments.map((comment, index) => {
        // console.log(comment);
        return <Item key={`comment${index}`} {...comment} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
