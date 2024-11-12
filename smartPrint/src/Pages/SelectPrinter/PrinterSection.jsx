import React from 'react';
import styled from 'styled-components';
import PrinterButton from './PrinterButton';

const PrinterSection = () => {
  const printers = [
    { label: 'Máy in A' },
    { label: 'Máy in B' },
    { label: 'Máy in C' },
  ];

  return (
    <Section>
      <Header>
        <Heading>Printer Selection</Heading>
      </Header>
      <Main>
        {printers.map((printer, index) => (
          <PrinterButton key={index} label={printer.label} />
        ))}
      </Main>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333333;
`;

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default PrinterSection;