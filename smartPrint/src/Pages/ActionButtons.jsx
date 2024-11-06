import React from "react";
import styled from "styled-components";

const ActionButtons = () => {
  return (
    <ActionButtonsContainer>
      <NextButton>TIẾP THEO</NextButton>
      <CancelButton>HỦY</CancelButton>
    </ActionButtonsContainer>
  );
};

const ActionButtonsContainer = styled.div`
  align-self: end;
  display: flex;
  width: 352px;
  max-width: 100%;
  justify-content: space-between;
  margin: 61px 42px 0 0;
  @media (max-width: 991px) {
    margin: 40px 10px 0 0;
  }
`;

const Button = styled.button`
  background-color: rgba(217, 217, 217, 1);
  color: rgba(0, 0, 0, 1);
  font: 400 24px/0.8 Roboto, sans-serif;
  border: none;
  cursor: pointer;
`;

const NextButton = styled(Button)`
  padding: 18px 14px 10px;
`;

const CancelButton = styled(Button)`
  padding: 21px 35px 8px;
  @media (max-width: 991px) {
    padding: 21px 20px 8px;
  }
`;

export default ActionButtons;