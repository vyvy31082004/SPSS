import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown'
const ColorModeSelector = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState('Select');

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
    if (onSelectOption) {
      onSelectOption(eventKey); // Gửi giá trị lên cha
    }
  };
  return (
    <SelectorContainer>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle className="custom-dropdown-btn" id="dropdown-basic">
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item eventKey="Có màu">Có màu</Dropdown.Item>
          <Dropdown.Item eventKey="Đen trắng">Đen trắng</Dropdown.Item> 
          
        </Dropdown.Menu>
      </Dropdown>
       
      
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #000;
`;

const ColorOption = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Label = styled.span``;

export default ColorModeSelector;