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
import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';

const PrinterList = () => {
  const [selectedPrinter, setSelectedPrinter] = useState();

  const printers = [
    { id: 'A', name: 'Máy in A', status: 'Sẵn sàng', location: 'B4' },
    { id: 'B', name: 'Máy in B', status: 'Chưa sẵn sàng', location: 'A4' },
    { id: 'C', name: 'Máy in C', status: 'Sẵn sàng',location: 'A5' },
    { id: 'D', name: 'Máy in D', status: 'Chưa sẵn sàng', location: 'H6' },
  ];
// xử lý việc chọn và bỏ chọn máy in trong một danh sách
  // const handlePrinterSelect = (printerId) => {
  //   if (selectedPrinter.includes(printerId)) {
  //     setSelectedPrinter(selectedPrinter.filter((id) => id !== printerId));
  //   } else {
  //     setSelectedPrinter([...selectedPrinter, printerId]);
  //   }
  // };
  const handlePrinterSelect = (printerId) => {
    // Cập nhật selectedPrinter với printerId được chọn
    setSelectedPrinter(printerId);
  };

  return (
    <div>
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
            <tr key={printer.id}
              className={selectedPrinter === printer.id ? 'table-primary' : ''}
              onClick={() => handlePrinterSelect(printer.id)}
              >
              <td>{printer.name}</td>
              <td>{printer.status}</td>
              <td>{printer.location}</td>
              <td>
                <Form.Check
                  type="radio"
                  // checked={selectedPrinter.includes(printer.id)}
                  // onChange={() => handlePrinterSelect(printer.id)}
                  //checked={selectedPrinter === printer.id}
                  
                  name = "printer" //dat name de cho no chung 
                  id = {`my-${printer.id}`}
                  onChange={() => handlePrinterSelect(printer.id)}
                />
                
              </td>
              
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>
  );
};

export default PrinterList;