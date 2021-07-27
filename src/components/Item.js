import React from "react";
import styled from "styled-components";

function Item({ id, email, body }) {
  return (
    <Container>
      <div>
        <p className="title">Comment id </p>
        <p>{id}</p>
      </div>
      <div>
        <p className="title">Email </p>
        <p>{email}</p>
      </div>
      <div>
        <p className="title">Comment </p>
        <p>{body}</p>
      </div>
    </Container>
  );
}

const Container = styled.article`
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;

  margin-bottom: 14px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: flex-start;

    font-size: 18px;
    line-height: 21px;
    margin-bottom: 12px;
    color: #212529;

    p {
      margin: 0;
      &.title {
        font-weight: 600;
        margin-right: 12px;
      }
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      padding-top: 2px;

      &.title {
        padding-top: 0;
      }
    }
  }
`;

export default React.memo(Item);
