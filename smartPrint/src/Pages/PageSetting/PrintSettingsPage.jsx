import React from "react";
import styled from "styled-components";
import Header from "../../Components/header";
import PrinterSelection from "./PrinterSelection";
import PrintContainer from "../../Components/container";
import { usePrintSettings } from "./PrintSettingContext";
import PrintOptions from "./PrintOptions";
import PageSettings from "./PageSettings";
import Button from "../../Button/Button";
import Modal from 'react-bootstrap/Modal';
import PrintActions from "./PrintActions";
import { Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


function PrintSettingsPage() {

  const { printSettings } = usePrintSettings();
  const navigate = useNavigate();

  console.log("oitroioi", printSettings);

  return (
    <PrintContainer>
      <Header title="CÀI ĐẶT" />
      <MainContent>
        <PrinterSelection />
        <OptionsContainer>
          <PrintOptions />
        </OptionsContainer>
        <ButtonContainer>
          <Button title="Next" />
          <Button title="Back" onClick={() => navigate(-1)} />
        </ButtonContainer>
      </MainContent>
    </PrintContainer>
  );
}

// Styled Components

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  width: 100%;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between options */
  width: 100%;
  @media (max-width: 991px) {
    gap: 15px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  align-items: center; /* Center buttons vertically */
  gap: 16px; /* Space between buttons */
  position: relative; /* Position at the bottom right */
  bottom: 16px;
  right: 16px;
`;

export default PrintSettingsPage;
