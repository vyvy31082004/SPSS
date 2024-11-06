import React from "react";
import styled from "styled-components";

const UploadButton = () => {
  return (
    <UploadButtonWrapper>
      <UploadButtonText>CHỌN FILE</UploadButtonText>
    </UploadButtonWrapper>
  );
};

const UploadButtonWrapper = styled.button`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  padding: 42px 43px;
  border: 1px solid rgba(0, 0, 0, 1);
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 20px;
  }
`;

const UploadButtonText = styled.span`
  color: rgba(0, 0, 0, 1);
  font: 400 36px/1 Segoe UI, sans-serif;
`;

export default UploadButton;