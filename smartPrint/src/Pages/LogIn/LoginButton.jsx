import * as React from "react";
import styled from "styled-components";

export function LoginButton() {
  return (
    <ButtonWrapper>
      <StyledButton type="submit">LOG IN</StyledButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 1);
  border: none;
  width: 494px;
  max-width: 100%;
  padding: 37px 70px;
  font: 400 128px/0 Jaro, sans-serif;
  cursor: pointer;
  
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    padding: 20px;
  }
`;