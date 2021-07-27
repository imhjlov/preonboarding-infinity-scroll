import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function List() {
  //* comments 값 불러오기
  const { comments } = useSelector((state) => state.comments);

  return (
    <Container>
      {comments.map((comment) => {
        return <Item key={uuidv4()} {...comment} />;
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
