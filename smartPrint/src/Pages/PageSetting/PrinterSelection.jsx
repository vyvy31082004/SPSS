import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import PrinterList from "../SelectPrinter/PrinterSection";
import PrintPropertiesPage from "../Properties/PrintPropertiesPage";
import PrintContainer from "../../Components/container";


function PrinterSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedPrinter = location.state?.selectedPrinter;

  const navigateToPrinterList = () => {
    navigate("/PrintList"); // Define this route in your router
  };

  const navigateToPropertiesPage = () => {
    navigate("/PrintProp"); // Define this route in your router
  };

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
        
        <TabButton onClick={navigateToPrinterList} style={{ flexGrow: 1 }}>
          <TabText>Chọn Máy in</TabText>
          <TabIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7149beae9142923931bf4db0531a1ad21c2beb9e602c9261d1de423f789525?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt=""
          />
        </TabButton>

        <TabButton onClick={navigateToPropertiesPage}>
          <TabText>Thuộc tính</TabText>
          <TabIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7149beae9142923931bf4db0531a1ad21c2beb9e602c9261d1de423f789525?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt=""
          />
        </TabButton>
      </PrinterRow>
       {/* Conditionally render PrinterList */}
       {/* Conditionally render PrinterList using ReusableContainer */}
      {/* {showPrinterList && (
        <PrintContainer onClose={togglePrinterList}>
          <PrinterList />
        </PrintContainer>
      )} */}

      {/* Conditionally render PrintPropertiesPage using ReusableContainer */}
      {/* {showPropertiesPage && (
        <PrintContainer onClose={togglePropertiesPage}>
          <PrintPropertiesPage />
        </PrintContainer>
      )} */}
      <PrinterRow>
        <h3>Máy in đã chọn:</h3>
        {selectedPrinter ? (
          <p style={{fontSize: "24px"}}>
            {selectedPrinter.name} - {selectedPrinter.status} ({selectedPrinter.location})
          </p>
        ) : (
          <p style={{fontSize: "24px"}}>Chưa có máy in nào được chọn.</p>
        )}
        {/* Other UI components */}
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
const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  min-height: 44px;
  gap: 8px;
  padding: 4px 18px;
  border: none;
  cursor: pointer;
`;
const TabIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: right; 
  padding-right: 5px; 
  width: 28px; /* Đặt chiều rộng của ảnh */
`;

const TabText = styled.span`
  color: rgba(0, 0, 0, 1);
  font: 400 20px Roboto, sans-serif;
`;

const Popup = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
export default PrinterSelection;
