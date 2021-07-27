import React from "react";
import styled from "styled-components";

import Item from "./Item";

function List({ comments }) {
  console.log(comments && comments[0]);
  return (
    <Container>
      <Item comment={comments && comments[0]} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
