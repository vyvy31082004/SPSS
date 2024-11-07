import React from "react";
import styled from "styled-components";

function PrintOptions() {
  return (
    <OptionsWrapper>
      <OptionsTabs>
        <TabButton>
          <TabIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7149beae9142923931bf4db0531a1ad21c2beb9e602c9261d1de423f789525?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
          <TabText>Thuộc tính</TabText>
        </TabButton>
        <TabButton>
          <TabIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0b3ba86f6c38554c8f94e1de750a249683fd9d21b10237c6b995250d46ffa7c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
          <TabText>Hoạt động</TabText>
        </TabButton>
      </OptionsTabs>
      <OptionsContent>
        <OptionColumn>
          <OptionGroup>
            <RadioOption>
              <RadioIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/574a5fadb306c528efaac1824699080a1e39a88cefc04c76e9f3427b91b4431b?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
              <OptionText>Lựa chọn</OptionText>
            </RadioOption>
            <Placeholder />
          </OptionGroup>
        </OptionColumn>
        <OptionColumn>
          <CopyOptions>
            <CopyTitle>Bản sao</CopyTitle>
            <CopyControls>
              <CopyCount>
                <CopyLabel>Số lượng bản sao</CopyLabel>
                <CopyIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1674320aafa0f08129b92213b57b98c90f440496ed1713042b3624bcf6ca88?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
              </CopyCount>
              <CopyActions>
                <CopyNumber>1</CopyNumber>
                <SortOption>
                  <SortIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8698bc2051d4e83e43495202a59618612a055265e0644cb8efcd7c9309ce3c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
                  <SortText>Sắp xếp</SortText>
                </SortOption>
              </CopyActions>
            </CopyControls>
          </CopyOptions>
        </OptionColumn>
      </OptionsContent>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.section`
  display: flex;
  margin-top: 5px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 8px;
  }
`;

const OptionsTabs = styled.div`
  display: flex;
  width: 100%;
  padding-left: 11px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  min-height: 35px;
  gap: 8px;
  padding: 4px 18px;
  border: none;
  cursor: pointer;
`;

const TabIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
`;

const TabText = styled.span`
  color: rgba(0, 0, 0, 1);
  font: 400 20px Roboto, sans-serif;
`;

const OptionsContent = styled.div`
  margin-top: 18px;
  width: 533px;
  max-width: 100%;
  display: flex;
  gap: 20px;
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
  width: 39%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  margin-top: 63px;
  width: 100%;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  font: 400 14px/1 Roboto, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const RadioOption = styled.label`
  align-self: center;
  display: flex;
  width: 87px;
  gap: 11px;
  cursor: pointer;
`;

const RadioIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
`;

const OptionText = styled.span`
  color: rgba(0, 0, 0, 1);
`;

const Placeholder = styled.div`
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  display: flex;
  height: 23px;
  gap: 8px;
`;

const CopyOptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CopyTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 24px/0.8 Segoe UI, sans-serif;
`;

const CopyControls = styled.div`
  display: flex;
  margin-top: 24px;
  align-items: start;
  gap: 20px;
  font-family: Roboto, sans-serif;
`;

const CopyCount = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  line-height: 1;
`;

const CopyLabel = styled.label`
  margin-bottom: 5px;
`;

const CopyIcon = styled.img`
  aspect-ratio: 0.73;
  object-fit: contain;
  object-position: center;
  width: 45px;
  align-self: end;
  @media (max-width: 991px) {
    margin-right: 9px;
  }
`;

const CopyActions = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyNumber = styled.div`
  align-self: center;
  width: 83px;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  height: 24px;
  gap: 8px;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  white-space: nowrap;
  padding: 7px 18px 7px 14px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SortOption = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 20px;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  line-height: 1;
`;

const SortIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const SortText = styled.span`
  color: rgba(0, 0, 0, 1);
`;

export default PrintOptions;