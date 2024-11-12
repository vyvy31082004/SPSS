import React from 'react';
import styled from 'styled-components';

const PrinterButton = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

const StyledButton = styled.button`
  align-self: flex-start;
  margin-top: 16px;
  flex-grow: 1;
  width: 111px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export default PrinterButton;