import React, { useState } from "react";
import styled from "styled-components";
import RadioOption from "../../Components/RadioOption";
import { Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from "react-bootstrap";

function PrintOptions() {
  return (
    <OptionsWrapper>
      <OptionsContent>
        <OptionColumn>
          <CopyTitle>Phạm vi trang</CopyTitle>
          <PrintRangeOptions/>
        </OptionColumn>
        <OptionColumn>
            <CopyTitle>Bản sao</CopyTitle>
            <CopyControls>
            <IconWrapper>
            <Icon
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe1674320aafa0f08129b92213b57b98c90f440496ed1713042b3624bcf6ca88?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757"
              alt=""
            />
            <OptionText>Số lượng: </OptionText>
            </IconWrapper>
            
            
            <InputField placeholder="1" type="number"></InputField>
            
            
              {/* <CopyActions>
                <CopyNumber>1</CopyNumber>
                <SortOption>
                  <SortIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb8698bc2051d4e83e43495202a59618612a055265e0644cb8efcd7c9309ce3c?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="" />
                  <SortText>Sắp xếp</SortText>
                </SortOption>
              </CopyActions> */}
            </CopyControls>
        </OptionColumn>
        <OptionColumn>
          <CopyTitle>Print Copies</CopyTitle>
        <PrintOrderOptions/>
        </OptionColumn>
      </OptionsContent>
      <OptionsContent><PagesPerSheet/></OptionsContent>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 15px;
  }
`;

const OptionsTabs = styled.div`
  display: flex;
  width: 100%;
  padding-left: 11px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  flex-shrink: 0; /* Ngăn không cho icon bị thu nhỏ khi container nhỏ lại */
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

const OptionText = styled.span`
  color: #000;
  font: 400 20px "Roboto", sans-serif;
`;


const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  min-height: 35px;
  gap: 8px;
  padding: 4px 18px;
  border: none;
  cursor: pointer;
`;

const TabIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 28px;
`;

const TabText = styled.span`
  color: rgba(0, 0, 0, 1);
  font: 400 20px Roboto, sans-serif;
`;

const OptionsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  width: 100%; /* Đảm bảo chiếm hết chiều rộng của container */
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const OptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font: 400 20px/1 Roboto, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

// const RadioOption = styled.label`
//   align-self: center;
//   display: flex;
//   width: 87px;
//   gap: 11px;
//   cursor: pointer;
// `;

// const RadioIcon = styled.img`
//   aspect-ratio: 1;
//   object-fit: contain;
//   object-position: center;
//   width: 20px;
// `;



const Placeholder = styled.div`
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  display: flex;
  height: 23px;
  gap: 8px;
`;

const CopyOptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-weight: 400;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const CopyTitle = styled.h3`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  font: 24px/0.8 Segoe UI, sans-serif;
`;

const CopyControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  font-family: Roboto, sans-serif;
`;
const InputField = styled.input`
  padding: 8px 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  max-height: 28px;
  max-width: 70px;
  font: 400 24px "Roboto", sans-serif;
`;
const CopyCount = styled.div`
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  line-height: 1;
`;

const CopyLabel = styled.label`
  margin-bottom: 5px;
`;

const CopyIcon = styled.img`
  aspect-ratio: 0.73;
  object-fit: contain;
  object-position: center;
  width: 45px;
  align-self: end;
  @media (max-width: 991px) {
    margin-right: 9px;
  }
`;

const CopyActions = styled.div`
  display: flex;
  flex-direction: column;
`;

const CopyNumber = styled.div`
  align-self: center;
  width: 83px;
  border-radius: 5px;
  background: var(--Gray-5, #e0e0e0);
  height: 24px;
  gap: 8px;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  white-space: nowrap;
  padding: 7px 18px 7px 14px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SortOption = styled.div`
  display: flex;
  margin-top: 29px;
  gap: 20px;
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
  line-height: 1;
`;

const SortIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const SortText = styled.span`
  color: rgba(0, 0, 0, 1);
`;
const PrintRangeOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customRange, setCustomRange] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Người dùng chọn:", event.target.value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCustomRange(value);

    // Kiểm tra giá trị đầu vào nếu cần
    const regex = /^(\d+(-\d+)?)(,\d+(-\d+)?)*$/; // Định dạng: "1-3,5,7-9"
    if (regex.test(value) || value === "") {
      console.log("Custom range hợp lệ:", value);
    } else {
      console.log("Custom range không hợp lệ!");
    }
  };

  return (
    <OptionGroup>
      <RadioOption
        
          name="pageRange"
          value="all"
          checked={selectedOption === "all"}
          onChange={handleOptionChange}
        >
        Tất cả
      </RadioOption>

      <RadioOption
          name="pageRange"
          value="current"
          checked={selectedOption === "current"}
          onChange={handleOptionChange}
      >
        Chỉ trang này
      </RadioOption>

      <RadioOption
        type="radio"
        name="pageRange"
        value="custom"
        checked={selectedOption === "custom"}
        onChange={handleOptionChange}
      >
        Tùy chỉnh
      </RadioOption>
      <CustomInputField
          type="text"
          disabled={selectedOption !== "custom"}
          placeholder="Ex: 1-3, 10-20,..."
          value={customRange}
          onChange={handleInputChange}
        />
    </OptionGroup>
  );
};
const CustomInputField = styled(InputField)`
  width: 250px; /* Tăng độ dài thêm */
  max-width: 300px; /* Đảm bảo không quá dài */
`;

const PrintOrderOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("Người dùng chọn:", event.target.value);
  };

  return (
    <OptionGroup>
      <RadioOption
        name="pageOrder"
        value="collate"
        checked={selectedOption === "collate"}
        onChange={handleOptionChange}
      >
        Collate
      </RadioOption>

      <RadioOption
        name="pageOrder"
        value="uncollate"
        checked={selectedOption === "uncollate"}
        onChange={handleOptionChange}
      >
        Uncollate
      
      </RadioOption>


    </OptionGroup>
  );
};
const PagesPerSheet = () => {
  const [selectedOption, setSelectedOption] = useState("One");

  const handleSelect = (selected) => {
    setSelectedOption(selected);
    console.log("Người dùng chọn:", selected);
  };

  return (
    <div>
      <label style={{ fontSize: "24px" }} htmlFor="pagespersheet">
        Pages Per Sheet:
      </label>
      <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle className="custom-dropdown-btn" id="dropdown-pagepersheet">
          {selectedOption}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="One">One</Dropdown.Item>
          <Dropdown.Item eventKey="Two">Two</Dropdown.Item>
          <Dropdown.Item eventKey="Four">Four</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


export default PrintOptions;