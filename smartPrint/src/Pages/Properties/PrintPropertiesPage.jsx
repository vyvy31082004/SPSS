import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import hook useNavigate
import PageSizeSelector from './PageSizeSelector';
import { usePrintSettings } from '../PageSetting/PrintSettingContext';
import Button from '../../Button/Button';
import Header from "../../Components/header";
import OrientationSelector from './OrientationSelector';
import ColorModeSelector from './ColorModeSelector';
import PrintModeSelector from './PrintModeSelector';
import ReusableContainer from '../../Components/container';

const PrintPropertiesPage = ({onClose}) => {
  // Hàm xử lý khi nhấn nút "Close"

  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng
  const { printSettings, setPrintSettings } = usePrintSettings();
  const pagesize = printSettings.pagesize;
  const pageorien = printSettings.pageorien;
  const colormode = printSettings.colormode;
  const printmode = printSettings.printmode;

  


  // Hàm xử lý khi nhấn nút "Close"
  // Hàm xử lý khi nhấn nút "Close"
const handleClose = () => {
  console.log("Đã xác định thuộc tính:", printSettings);
  navigate("/Printpagesetting", { 
    state: { 
      ...printSettings, // Gửi toàn bộ thông tin từ context
    } 
  });
};

// Hàm xử lý cập nhật từng giá trị
const handlePageSize = (value) => {
  setPrintSettings((prev) => ({
    ...prev,
    pagesize: value,
  }));
  console.log('Pagesize selected:', value);
};

const handlePageOrien = (value) => {
  setPrintSettings((prev) => ({
    ...prev,
    pageorien: value,
  }));
  console.log('Page Orien selected:', value);
};

const handleColorMode = (value) => {
  setPrintSettings((prev) => ({
    ...prev,
    colormode: value,
  }));
  console.log('Color selected:', value);
};

const handlePrintMode = (value) => {
  setPrintSettings((prev) => ({
    ...prev,
    printmode: value,
  }));
  console.log('Print Mode selected:', value);
};


  return (
    <ReusableContainer>
      <Header title="Kích thước trang" />
      <ContentWrapper>
        <ContentRow>
        <PageSizeSection>
        <SectionTitle>Định dạng</SectionTitle>
          <PageSizeSelector onSelectOption={handlePageSize} />
        </PageSizeSection>
        <OrientationSection>
          <SectionTitle>Hướng</SectionTitle>
          <OrientationSelector onSelectOption={handlePageOrien} />
        </OrientationSection>
        </ContentRow>
        <ContentRow>
        <ColorModeSection>
          <SectionTitle>Màu sắc</SectionTitle>
          <ColorModeSelector onSelectOption={handleColorMode} />
        </ColorModeSection>
        <PrintModeSection>
          <SectionTitle>Chế độ in</SectionTitle>
          <PrintModeSelector onSelectOption={handlePrintMode} />
        </PrintModeSection>
        </ContentRow>

      </ContentWrapper>

      {/* Khu vực nút hành động */}
      <ActionButtons>
        <Button title="Close" onClick={onClose}/>
        {/* <Button title="OK" onClick={handleOkClick}>OK</Button> */}
      </ActionButtons>
    </ReusableContainer>
  );
};

const PropertiesContainer = styled.main`
  display: flex;
  max-width: 856px;
  flex-direction: column;
`;

const ContentWrapper = styled.section`

  display: flex;
  width: 100%;
  margin-top: 50px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 34px 20px 16px;
  }
`;
const ContentRow = styled.section`
  display: flex; 
  flex-direction: row;
  gap: 20px;
  justify-content: center;
 

`;

const SectionTitle = styled.h2`
  color: #000;
  font: 400 24px/0.8 'Segoe UI', sans-serif;
  margin-bottom: 26px;
`;

const PageSizeSection = styled.section`
  margin-bottom: 25px;
`;

const OrientationSection = styled.section`
  margin-bottom: 12px;
`;

const ColorModeSection = styled.section`
  margin-bottom: 27px;
`;

const PrintModeSection = styled.section`
  margin-bottom: 26px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 20px;
`;


const CancelButton = styled(Button)``;

export default PrintPropertiesPage;
