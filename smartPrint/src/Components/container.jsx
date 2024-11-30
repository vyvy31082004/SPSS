import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

// Reusable container component
function ReusableContainer({ children, className, style }) {
  return (
    <StyledContainer className={className} style={style}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  background-color: rgba(128, 156, 172, 0.8); /* Màu nền giống như hình mẫu */
  border-radius: 10px; /* Bo tròn các góc */
  max-width: 900px;
  max-height: 650px;
  margin: o auto;
  padding: 0px 0px 0px; /* Khoảng cách bên trong */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng nhẹ */
  @media (max-width: 991px) {
    padding: 20px 15px; /* Thêm padding nhỏ hơn cho màn hình nhỏ */
  }
`;

export default ReusableContainer;
