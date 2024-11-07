import React from "react";
import styled from "styled-components";
import Header from "./Header";
import PrinterSelection from "./PrinterSelection";
import PrintOptions from "./PrintOptions";
import PageSettings from "./PageSettings";
import PrintActions from "./PrintActions";

function PrintSettingsPage() {
  return (
    <PageWrapper>
      <ContentContainer>
        <Header />
        <MainContent>
          <PrinterSelection />
          <OptionsContainer>
            <PrintOptions />
            <PageSettings />
            <PrintActions />
          </OptionsContainer>
        </MainContent>
      </ContentContainer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  max-width: 856px;
  flex-direction: column;
`;

const ContentContainer = styled.main`
  background-color: rgba(128, 156, 172, 0.8);
  display: flex;
  width: 100%;
  padding-bottom: 15px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContent = styled.section`
  display: flex;
  margin-top: 34px;
  width: 100%;
  flex-direction: column;
  padding: 0 43px 0 21px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-right: 10px;
  }
`;

export default PrintSettingsPage;