import React from 'react';
import styled from 'styled-components';

const PrintModeSelector = () => {
  return (
    <SelectorContainer>
      <PrintOption>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/574a5fadb306c528efaac1824699080a1e39a88cefc04c76e9f3427b91b4431b?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Single-sided icon" />
        <Label>Một mặt</Label>
      </PrintOption>
      <PrintOption>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8698bc2051d4e83e43495202a59618612a055265e0644cb8efcd7c9309ce3c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Double-sided icon" />
        <Label>Hai mặt</Label>
      </PrintOption>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000;
`;

const PrintOption = styled.label`
  display: flex;
  align-items: center;
  gap: 23px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Label = styled.span``;

export default PrintModeSelector;