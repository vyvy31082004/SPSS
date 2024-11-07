import React from "react";
import styled from "styled-components";

function PrinterSelection() {
  return (
    <PrinterWrapper>
      <PrinterLabel>Máy in</PrinterLabel>
      <PrinterOptions>
        <OptionColumn>
          <OptionGroup>
            <IconWrapper>
              <Icon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6aedd64e496c87857ed417ffdf2f83ec1a3eb5ce76c8e8ce07fe15ab0b47157?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
              <OptionText>Tên</OptionText>
            </IconWrapper>
            <OptionText>Tình trạng</OptionText>
            <PageRangeText>Phạm vi trang</PageRangeText>
            <RadioGroup>
              <RadioOption>
                <RadioIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8698bc2051d4e83e43495202a59618612a055265e0644cb8efcd7c9309ce3c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
                <OptionText>Tất cả</OptionText>
              </RadioOption>
              <RadioOption>
                <RadioIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/574a5fadb306c528efaac1824699080a1e39a88cefc04c76e9f3427b91b4431b?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
                <OptionText>Trang hiện tại</OptionText>
              </RadioOption>
              <RadioOption>
                <RadioIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/574a5fadb306c528efaac1824699080a1e39a88cefc04c76e9f3427b91b4431b?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
                <OptionText>Các trang</OptionText>
              </RadioOption>
            </RadioGroup>
          </OptionGroup>
        </OptionColumn>
      </PrinterOptions>
    </PrinterWrapper>
  );
}

const PrinterWrapper = styled.section`
  margin: 22px 0 0 15px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PrinterLabel = styled.h2`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-left: 12px;
  font: 400 24px/0.8 Segoe UI, sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const PrinterOptions = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const OptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  font: 400 20px/1 Roboto, sans-serif;
`;

const IconWrapper = styled.div`
  align-self: center;
  display: flex;
  width: 73px;
  gap: 11px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  aspect-ratio: 1.03;
  object-fit: contain;
  object-position: center;
  width: 31px;
`;

const OptionText = styled.span`
  align-self: start;
  margin-top: 12px;
`;

const PageRangeText = styled.span`
  align-self: start;
  margin-top: 24px;
  font: 24px/0.8 Segoe UI, sans-serif;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-top: 17px;
  width: 100%;
  padding-left: 37px;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  line-height: 1;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
`;

const RadioIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
`;

export default PrinterSelection;