import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import hook useNavigate
import PageSizeSelector from './PageSizeSelector';
import Button from '../../Button/Button';
import Header from "../../Components/header";
import OrientationSelector from './OrientationSelector';
import ColorModeSelector from './ColorModeSelector';
import PrintModeSelector from './PrintModeSelector';
import ReusableContainer from '../../Components/container';

const PrintPropertiesPage = () => {
  // Hàm xử lý khi nhấn nút "Close"
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  // Hàm xử lý khi nhấn nút "Close"
  const handleClose = () => {
    console.log("Close button clicked!");
    navigate(-1); // Quay lại trang trước đó
  };

  // Hàm xử lý khi nhấn nút "OK"
  const handleOkClick = () => {
    console.log("OK button clicked!");
    // Thêm logic lưu, gửi hoặc tiếp tục tại đây
  };

  return (
    <ReusableContainer>
      <Header title="Kích thước trang" />
      <ContentWrapper>
        <ContentRow>
        <PageSizeSection>
        <SectionTitle>Định dạng</SectionTitle>
          <PageSizeSelector />
        </PageSizeSection>
        <OrientationSection>
          <SectionTitle>Hướng</SectionTitle>
          <OrientationSelector />
        </OrientationSection>
        </ContentRow>
        <ContentRow>
        <ColorModeSection>
          <SectionTitle>Màu sắc</SectionTitle>
          <ColorModeSelector />
        </ColorModeSection>
        <PrintModeSection>
          <SectionTitle>Chế độ in</SectionTitle>
          <PrintModeSelector />
        </PrintModeSection>
        </ContentRow>

      </ContentWrapper>

      {/* Khu vực nút hành động */}
      <ActionButtons>
        <Button title="Close" onClick={handleClose}>Close</Button>
        <Button title="OK" onClick={handleOkClick}>OK</Button>
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
