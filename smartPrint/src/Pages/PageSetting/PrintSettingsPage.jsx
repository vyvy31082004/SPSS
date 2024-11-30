import React from "react";
import styled from "styled-components";
import Header from "../../Components/header";
import PrinterSelection from "./PrinterSelection";
import PrintContainer from "../../Components/container";
import PrintOptions from "./PrintOptions";
import PageSettings from "./PageSettings";
import PrintActions from "./PrintActions";

function PrintSettingsPage() {
  return (
    <PageWrapper>
      <PrintContainer>
        <Header title="CÀI ĐẶT" />
        <MainContent>
          <PrinterSelection />
          {/* <OptionsContainer>
            <PrintOptions />
            <PageSettings />
            <PrintActions />
          </OptionsContainer> */}
        </MainContent>
      </PrintContainer>
    </PageWrapper>
  );
}

// Styled Components

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f8; /* Light background */
  min-height: 100vh; /* Full viewport height */
  padding: 20px;
`;

const ContentContainer = styled.main`
  background-color: rgba(128, 156, 172, 0.8); /* Semi-transparent blue */
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 800px; /* Center content */
  border-radius: 10px; /* Smooth corners */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px;
  }
`;

const MainContent = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between options */
  width: 100%;
  margin-top: 20px;
  @media (max-width: 991px) {
    gap: 15px;
  }
`;

export default PrintSettingsPage;
