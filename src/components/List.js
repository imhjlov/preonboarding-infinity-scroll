import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { useSelector } from "react-redux";

function List() {
  //* comments 값 불러오기
  const { comments } = useSelector((state) => state.comments);

  return (
    <Container>
      {comments.map((comment, index) => {
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
