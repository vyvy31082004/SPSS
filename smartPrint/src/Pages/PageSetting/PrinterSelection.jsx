import React, { useState } from "react";
import styled from "styled-components";
import { usePrintSettings } from "./PrintSettingContext";
import Modal from "react-bootstrap/Modal";
import PrinterList from "../SelectPrinter/PrinterSection";
import PrintPropertiesPage from "../Properties/PrintPropertiesPage";

function PrinterSelection() {
  const { printSettings, fetchSelectedPrinter } = usePrintSettings();
  const [showPrinterList, setShowPrinterList] = useState(false);
  const [showPropertiesPage, setShowPropertiesPage] = useState(false);

  const togglePrinterList = () => {
    setShowPrinterList((prev) => !prev);

    // Làm mới thông tin máy in được chọn sau khi modal đóng
    if (showPrinterList) {
      fetchSelectedPrinter();
    }
  };

  const togglePropertiesPage = () => setShowPropertiesPage((prev) => !prev);

  return (
    <PrinterWrapper>
      <PrinterRow>
        <IconWrapper>
          <Icon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6aedd64e496c87857ed417ffdf2f83ec1a3eb5ce76c8e8ce07fe15ab0b47157?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt="Máy in icon"
          />
          <OptionText>Máy in</OptionText>
        </IconWrapper>

        <TabButton onClick={togglePrinterList} style={{ flexGrow: 1 }}>
          <TabText>Chọn Máy in</TabText>
          <TabIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7149beae9142923931bf4db0531a1ad21c2beb9e602c9261d1de423f789525?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt="Icon chọn máy in"
          />
        </TabButton>

        <TabButton onClick={togglePropertiesPage}>
          <TabText>Thuộc tính</TabText>
          <TabIcon
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7149beae9142923931bf4db0531a1ad21c2beb9e602c9261d1de423f789525?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
            alt="Icon thuộc tính"
          />
        </TabButton>
      </PrinterRow>

      {/* Modal for Printer List */}
      <Modal
        show={showPrinterList}
        onHide={togglePrinterList}
        backdrop="static" 
        keyboard={false} 
        animation={false}
      >
        <PrinterList onClose={togglePrinterList} />
      </Modal>

      {/* Modal for Properties Page */}
      <Modal
        show={showPropertiesPage}
        onHide={togglePropertiesPage}
        backdrop="static" 
        keyboard={false} 
        animation={false}
      >
        <PrintPropertiesPage onClose={togglePropertiesPage} />
      </Modal>

      <PrinterRow>
        <h3>Máy in đã chọn:</h3>
        {printSettings.selectedPrinter && printSettings.selectedPrinterName  ? (
          <p style={{ fontSize: "24px" }}>
            {printSettings.selectedPrinterName }
          </p>
        ) : (
          <p style={{ fontSize: "24px" }}>Chưa có máy in nào được chọn.</p>
        )}
      </PrinterRow>
    </PrinterWrapper>
  );
}

// Styled Components
const PrinterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px 50px 20px;
  width: 100%;
`;

const PrinterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
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
  width: 28px;
`;

const TabText = styled.span`
  color: rgba(0, 0, 0, 1);
  font: 400 20px Roboto, sans-serif;
`;

export default PrinterSelection;
