// import React from 'react';
// import styled from 'styled-components';
// import PrinterButton from './PrinterButton';

// const PrinterSection = () => {
//   const printers = [
//     { id: 'A', name: 'Máy in A', status: 'Sẵn sàng', type: 'Sản sàng' },
//     { id: 'B', name: 'Máy in B', status: 'Chưa sẵn sàng', type: 'Chưa sản sàng' },
//     { id: 'C', name: 'Máy in C', status: 'Sẵn sàng', type: 'Sản sàng' },
//     { id: 'D', name: 'Máy in D', status: 'Sẵn sàng', type: 'Sản sàng' },
//   ];
//   const handlePrinterSelect = (printer) => {
//     setSelectedPrinter(printer);
//   };

//   return (
//     <Section>
//       <container> <h3>Danh sách máy in</h3></container>
//       <Main>
//         {printers.map((printer, index) => (
//           <PrinterButton key={index} label={printer.label} />
//         ))}
//       </Main>
//     </Section>
//   );

// };


// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const Header = styled.header`
//   margin-bottom: 16px;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
//   color: #333333;
// `;

// const Main = styled.main`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;
// `;

// export default PrinterSection;
import React, { useState } from "react";
import styled from "styled-components";
import { Table, Form } from "react-bootstrap";
import { usePrintSettings } from "../PageSetting/PrintSettingContext";
import Button from "../../Button/Button";
import PrintContainer from "../../Components/container";

const PrinterList = ({ onClose }) => {
  const { printSettings, setPrintSettings } = usePrintSettings();
  const selectedPrinter = printSettings.selectedPrinter;
  const [message, setMessage] = useState("");

  const printers = [
    { id: "A", name: "Máy in A", status: "Sẵn sàng", location: "B4", available: "true" },
    { id: "B", name: "Máy in B", status: "Chưa sẵn sàng", location: "A4", available: "false" },
    { id: "C", name: "Máy in C", status: "Sẵn sàng", location: "A5", available: "true" },
    { id: "D", name: "Máy in D", status: "Chưa sẵn sàng", location: "H6", available: "false" },
  ];

  const handlePrinterSelect = (printerId) => {
    const selected = printers.find((printer) => printer.id === printerId);

    if (selected && selected.available === "false") {
      setMessage(`Máy in ${selected.name} không sẵn sàng để chọn.`);
    } else {
      setMessage(`Máy in ${selected.name} đã được chọn!`);
      setPrintSettings((prev) => ({
        ...prev,
        selectedPrinter: printerId,
      }));
    }
  };

  return (
    <PrintContainer>
      <h3>Danh sách máy in</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên máy in</th>
            <th>Trạng thái</th>
            <th>Địa điểm</th>
            <th>Chọn</th>
          </tr>
        </thead>
        <tbody>
          {printers.map((printer) => (
            <tr
              key={printer.id}
              className={selectedPrinter === printer.id ? "table-primary" : ""}
            >
              <td>{printer.name}</td>
              <td>{printer.status}</td>
              <td>{printer.location}</td>
              <td>
                <Form.Check
                  type="radio"
                  name="printer"
                  id={`printer-${printer.id}`}
                  disabled={printer.available === "false"}
                  checked={selectedPrinter === printer.id}
                  onChange={() => handlePrinterSelect(printer.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 style={{ color: "black" }}>Message: {message}</h4>
      <ActionButtons>
        <Button title="Close" onClick={onClose} />
      </ActionButtons>
    </PrintContainer>
  );
};

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 20px;
`;

export default PrinterList;
