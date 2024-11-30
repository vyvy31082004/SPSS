import React from 'react';
import styled from 'styled-components';
import PageSizeSelector from './PageSizeSelector';
import OrientationSelector from './OrientationSelector';
import ColorModeSelector from './ColorModeSelector';
import PrintModeSelector from './PrintModeSelector';

const PrintPropertiesPage = () => {
  return (
    <PropertiesContainer>
      <ContentWrapper>
        <PageSizeSection>
          <SectionTitle>Kích thước trang</SectionTitle>
          <PageSizeSelector />
        </PageSizeSection>
        <OrientationSection>
          <SectionTitle>Hướng</SectionTitle>
          <OrientationSelector />
        </OrientationSection>
        <ColorModeSection>
          <SectionTitle>Màu sắc</SectionTitle>
          <ColorModeSelector />
        </ColorModeSection>
        <PrintModeSection>
          <SectionTitle>Chế độ in</SectionTitle>
          <PrintModeSelector />
        </PrintModeSection>
  
      </ContentWrapper>
    </PropertiesContainer>
  );
};

const PropertiesContainer = styled.main`
  display: flex;
  max-width: 856px;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  color: #000;
  padding: 39px 25px 13px;
  font: 400 36px/1 'Segoe UI', sans-serif;
  border: 1px solid #000;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 39px 20px 13px;
  }
`;

const ContentWrapper = styled.section`
  background-color: rgba(128, 156, 172, 0.8);
  display: flex;
  width: 100%;
  padding: 34px 33px 16px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 34px 20px 16px;
  }
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
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: rgba(217, 217, 217, 1);
  font: 24px/0.8 'Segoe UI', sans-serif;
  padding: 15px 25px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 15px 20px;
  }
`;

const ConfirmButton = styled(Button)``;

const CancelButton = styled(Button)``;

export default PrintPropertiesPage;