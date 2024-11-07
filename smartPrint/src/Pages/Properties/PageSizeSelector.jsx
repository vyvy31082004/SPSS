import React from 'react';
import styled from 'styled-components';

const PageSizeSelector = () => {
  return (
    <SelectorContainer>
      <SizeOption>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6aedd64e496c87857ed417ffdf2f83ec1a3eb5ce76c8e8ce07fe15ab0b47157?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Format icon" />
        <Label>Định dạng</Label>
        <FormatSelector>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/9855a6d8b0072c8c6f0b712787e2c2a42964a4ee3b1de0352402c419e9866832?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="A4 icon" />
          <span>A4</span>
        </FormatSelector>
      </SizeOption>
      <DimensionOption>
        <Label>Độ rộng</Label>
        <Value>2100</Value>
      </DimensionOption>
      <DimensionOption>
        <Label>Chiều cao</Label>
        <Value>2970</Value>
      </DimensionOption>
      <UnitInfo>Đơn vị là phần mười milimét</UnitInfo>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: #000;
`;

const SizeOption = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 11px;
`;

const Icon = styled.img`
  width: 31px;
  height: 31px;
  object-fit: contain;
`;

const Label = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const FormatSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 3px 18px;
  font-size: 14px;

  img {
    width: 17px;
    height: 17px;
  }
`;

const DimensionOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Value = styled.span`
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 7px 18px;
  font-size: 14px;
`;

const UnitInfo = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

export default PageSizeSelector;