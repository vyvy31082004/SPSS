import * as React from "react";
import styled from "styled-components";

export function InputField({ label, type = "text" }) {
  const inputId = `${label.toLowerCase().replace(/\s+/g, '-')}-input`;
  
  return (
    <InputWrapper>
      <InputColumn>
        <Label htmlFor={inputId}>{label}</Label>
      </InputColumn>
      <InputFieldColumn>
        <StyledInput 
          type={type}
          id={inputId}
          name={inputId}
          aria-label={label}
        />
      </InputFieldColumn>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 29%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  align-self: stretch;
  margin: auto 0;
  font: 400 128px/0 Jaro, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    font-size: 40px;
  }
`;

const InputFieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 71%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 1);
  width: 1324px;
  height: 229px;
  max-width: 100%;
  border: none;
  padding: 0 30px;
  font-size: 24px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;