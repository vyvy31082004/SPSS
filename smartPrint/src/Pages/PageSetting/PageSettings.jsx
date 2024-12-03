import React from "react";
import styled from "styled-components";
import PrintActions from "./PrintActions";

function PageSettings() {
  return (
    <SettingsWrapper>
      <SettingsColumn>
        <SettingsGroup>
          <SettingsTitle>Sự phóng to/ thu nhỏ</SettingsTitle>
          <SettingsOption>Số trang trên mỗi tờ</SettingsOption>
          <SettingsOption>Tỷ lệ theo kích thước giấy</SettingsOption>
        </SettingsGroup>
      </SettingsColumn>
      <SettingsColumn>
        <SettingsControls>
          <ControlOption>
            <ControlIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/516ca6eb0df9539b8520dd59de55931fee32b7689da296af97293d263adfc484?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
            <ControlText>1 trang</ControlText>
          </ControlOption>
          <ControlOption>
            <ControlIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9855a6d8b0072c8c6f0b712787e2c2a42964a4ee3b1de0352402c419e9866832?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
            <ControlText>Không thay đổi</ControlText>
          </ControlOption>
        </SettingsControls>
      </SettingsColumn>
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding-left: 50px;
  padding-right: 50px;
  width:100%;
  margin: 0 auto; /* Center the card */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px;
  }
`;


const SettingsColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 56%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const SettingsGroup = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: rgba(0, 0, 0, 1);
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 5px;
  }
`;

const SettingsTitle = styled.h3`
  transform: rotate(-0.001167009005062144rad);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font: 24px/0.8 Segoe UI, sans-serif;
`;

const SettingsOption = styled.div`
  align-self: end;
  margin: 23px 20px 0 0;
  font: 20px/1 Roboto, sans-serif;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const SettingsControls = styled.div`
  display: flex;
  margin-top: 43px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ControlOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  min-height: 23px;
  gap: 8px;
  padding: 4px 5px 4px 18px;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    margin-right: 2px;
  }
`;

const ControlIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
`;

const ControlText = styled.span`
  color: rgba(51, 51, 51, 1);
  font: 400 14px Roboto, sans-serif;
`;

export default PageSettings;