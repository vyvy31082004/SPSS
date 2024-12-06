import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";


function Header({ title }) {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderText>{title}</HeaderText>
      </Container>
    </HeaderWrapper>
  );
};

// Styled Header Wrapper using styled-components
const HeaderWrapper = styled.header`
  background-color: rgba(217, 217, 217, 1); /* Áp dụng màu nền rgba */
  width: 100%;
  padding: 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

;`

// Styled h1 component using styled-components
const HeaderText = styled.h1`
  color: rgba(0, 0, 0, 1); /* Màu chữ đen */
  font: 500 36px "Segoe UI", sans-serif; /* Cỡ chữ và font */
  text-align: left;
  margin: 0; /* Xóa margin mặc định */

  @media (max-width: 991px) {
    font-size: 24px; /* Giảm kích thước font trên màn hình nhỏ */
  }
;`

export default Header;