import styled from 'styled-components';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
const PageSizeSelector = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState('Select');

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    if (onSelectOption) {
      onSelectOption(eventKey); // Gửi giá trị lên cha
    }
  };
  const [inputValue, setInputValue] = useState('');
  // Hàm xử lý khi người dùng nhập vào input
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
   // Hàm xử lý khi form được submit
   const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [inputValue2, setInputValue2] = useState('');
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
  };
  return (
    <SelectorContainer>
      <SizeOption>
        {/* <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6aedd64e496c87857ed417ffdf2f83ec1a3eb5ce76c8e8ce07fe15ab0b47157?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Format icon" /> */}
        <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="custom-dropdown-btn" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item eventKey="A4">A4</Dropdown.Item>
          <Dropdown.Item eventKey="A3">A3</Dropdown.Item> 
          {/* <Dropdown.Item eventKey="Something else">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
        </Dropdown>
      </SizeOption>
      {/* <DimensionOption>
        <Label>Độ rộng</Label>
        <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Nhập vào đây"
              />
        </form>
      </DimensionOption>
      <DimensionOption>
        <Label>Chiều cao</Label>
        <form onSubmit={handleSubmit2}>
              <input
                type="text"
                value={inputValue2}
                onChange={handleChange2}
                placeholder="Nhập vào đây"
              />
        </form>
      </DimensionOption>
      <UnitInfo>Đơn vị là phần mười milimét</UnitInfo> */}
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000;
`;


const SizeOption = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  
`;

const Icon = styled.img`
  width: 31px;
  height: 31px;
  object-fit: contain;
`;

const Label = styled.span`
  color: #000;
  font: 400 24px "Roboto", sans-serif;
`;

const FormatSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 3px 18px;
  font-size: 14px;

  img {
    width: 17px;
    height: 17px;
  }
`;

const DimensionOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const Value = styled.span`
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 7px 18px;
  font-size: 14px;
`;

const UnitInfo = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;

export default PageSizeSelector;