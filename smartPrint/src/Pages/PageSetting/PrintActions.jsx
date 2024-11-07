import React from "react";
import styled from "styled-components";

function PrintActions() {
  return (
    <ActionsWrapper>
      <PrintOptions>
        <OptionGroup>
          <OptionTitle>In cái gì</OptionTitle>
          <OptionTitle>In</OptionTitle>
        </OptionGroup>
        <OptionSelections>
          <SelectionOption>
            <OptionIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad22a7678dffa756905afb9c3dca912ccadad4562b2c7c4872e8b064aea9a505?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
            <OptionText>Tài liệu</OptionText>
          </SelectionOption>
          <SelectionOption>
            <OptionIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad22a7678dffa756905afb9c3dca912ccadad4562b2c7c4872e8b064aea9a505?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
            <OptionText>Tất cả trang trong phạm vi</OptionText>
          </SelectionOption>
        </OptionSelections>
      </PrintOptions>
      <ActionButtons>
        <ActionButton>ĐỒNG Ý</ActionButton>
        <ActionButton>HỦY</ActionButton>
      </ActionButtons>
    </ActionsWrapper>
  );
}

const ActionsWrapper = styled.section`
  display: flex;
  margin-top: 43px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PrintOptions = styled.div`
  align-self: end;
  display: flex;
  gap: 26px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const OptionGroup = styled.div`
  align-self: start;
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  font: 400 20px/1 Roboto, sans-serif;
`;

const OptionTitle = styled.h4`
  margin-bottom: 14px;
`;

const OptionSelections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
`;

const SelectionOption = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionIcon = styled.img`
  aspect-ratio: 0.95;
  object-fit: contain;
  object-position: center;
  width: 18px;
  margin-right: 10px;
`;

const OptionText = styled.span`
  color: rgba(51, 51, 51, 1);
  font: 400 14px Roboto, sans-serif;
`;

const ActionButtons = styled.div`
  display: flex;
  margin-top: 34px;
  gap: 20px;
  color: rgba(0, 0, 0, 1);
  justify-content: space-between;
  font: 400 24px/0.8 Segoe UI, sans-serif;
`;

const ActionButton = styled.button`
  background-color: rgba(217, 217, 217, 1);
  padding: 18px 25px 11px;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 18px 20px;
  }
`;

export default PrintActions;