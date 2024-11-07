import React from 'react';
import styled from 'styled-components';

const OrientationSelector = () => {
  return (
    <SelectorContainer>
      <OrientationOption>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8698bc2051d4e83e43495202a59618612a055265e0644cb8efcd7c9309ce3c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Portrait icon" />
        <Label>Chiều dọc</Label>
      </OrientationOption>
      <OrientationOption>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/574a5fadb306c528efaac1824699080a1e39a88cefc04c76e9f3427b91b4431b?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Landscape icon" />
        <Label>Chiều ngang</Label>
      </OrientationOption>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000;
`;

const OrientationOption = styled.label`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Label = styled.span``;

export default OrientationSelector;