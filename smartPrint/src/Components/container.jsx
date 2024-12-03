import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

function ReusableContainer({ children, className, style, onClose }) {
  return (
    <ModalOverlay>
      <StyledContainer className={className} style={style}>
        {/* <CloseButton onClick={onClose}>×</CloseButton> */}
        {children}
      </StyledContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other elements */
`;

const StyledContainer = styled(Container)`
  background-color: rgba(128, 156, 172, 0.9); /* Background color */
  border-radius: 10px; /* Rounded corners */
  max-width: 850px;
  max-height: 700px;
  width: 100%;
  margin: auto;
  padding: 20px; /* Padding inside */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: relative; /* For close button positioning */
  overflow-y: auto; /* Add scrolling for large content */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export default ReusableContainer;
