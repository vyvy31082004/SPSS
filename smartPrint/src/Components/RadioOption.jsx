import React from "react";
import styled from "styled-components";

const StyledRadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const OptionText = styled.span`
  font: 400 20px "Roboto", sans-serif;
  color: #000;
`;

const RadioOption = ({ children, name, value, checked, onChange, icon }) => {
  return (
    <StyledRadioOption>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {icon && <RadioIcon src={icon} alt="radio-icon" />}
      <OptionText>{children}</OptionText>
    </StyledRadioOption>
  );
};

export default RadioOption;
