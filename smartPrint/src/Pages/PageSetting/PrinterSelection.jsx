import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";


function PrinterSelection() {
  return (
    <PrinterWrapper>
      <PrinterRow>
        <IconWrapper>
          <Icon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6aedd64e496c87857ed417ffdf2f83ec1a3eb5ce76c8e8ce07fe15ab0b47157?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt=""
          />
          <OptionText>Máy in</OptionText>
        </IconWrapper>
        <InputField placeholder="Chọn máy in" />
        <Button title="Thuộc tính"/>
      </PrinterRow>
    </PrinterWrapper>
  );
}

// Styled Components

const PrinterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 50px 50px;
  width: 100%;
`;

const PrinterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%; /* Đảm bảo chiếm hết chiều rộng của container */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0; /* Ngăn không cho icon bị thu nhỏ khi container nhỏ lại */
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const OptionText = styled.span`
  color: #000;
  font: 400 24px "Roboto", sans-serif;
`;

const InputField = styled.input`
  flex-grow: 1; /* Chiếm phần còn lại của không gian */
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 10px;
  min-height: 48px;
  max-weight: 600px;
  font: 400 16px "Roboto", sans-serif;
`;

const DropdownButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  font: 400 16px "Roboto", sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ccc;
  }
`;

export default PrinterSelection;
