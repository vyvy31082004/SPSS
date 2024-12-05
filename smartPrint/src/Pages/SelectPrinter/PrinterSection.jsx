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
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Form } from "react-bootstrap";
import { usePrintSettings } from "../PageSetting/PrintSettingContext";
import Button from "../../Button/Button";
import PrintContainer from "../../Components/container";

const PrinterList = ({ onClose }) => {
  const { printSettings, setPrintSettings } = usePrintSettings();
  const selectedPrinter = printSettings.selectedPrinter;
  const [printers, setPrinters] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch printers from backend
  useEffect(() => {
    const fetchPrinters = async () => {
      try {
        const response = await fetch("http://localhost:5000/printers"); // Adjust to your backend API endpoint
        if (response.ok) {
          const data = await response.json();
          setPrinters(data); // Set printers data from the backend
        } else {
          console.error("Failed to fetch printers");
        }
      } catch (error) {
        console.error("Error fetching printers:", error);
      }
    };

    fetchPrinters();
  }, []);

  const handlePrinterSelect = (printerId) => {
    const selected = printers.find((printer) => printer._id === printerId);

    if (selected && selected.status !== "Sẵn sàng") {
      setMessage(`Máy in ${selected.name} không sẵn sàng để chọn.`);
    } else {
      setMessage(`Máy in ${selected.name} đã được chọn!`);
      setPrintSettings((prev) => ({
        ...prev,
        selectedPrinter: printerId,
        selectedPrinterID: selected.id,
        selectedPrinterName: selected.name, // Lưu thêm tên máy in
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
              key={printer._id}
              className={selectedPrinter === printer._id ? "table-primary" : ""}
            >
              <td>{printer.name}</td>
              <td>{printer.status}</td>
              <td>{printer.location}</td>
              <td>
                <Form.Check
                  type="radio"
                  name="printer"
                  id={`printer-${printer._id}`}
                  disabled={printer.status !== "Sẵn sàng"}
                  checked={selectedPrinter === printer._id}
                  onChange={() => handlePrinterSelect(printer._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4 style={{ color: "black" }}>
        Máy in đã chọn: {printSettings.selectedPrinterName || "Chưa chọn"}
      </h4>
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


