import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>CÀI ĐẶT</HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  background-color: rgba(217, 217, 217, 1);
  width: 100%;
  color: rgba(0, 0, 0, 1);
  padding: 36px 36px 16px;
  font: 400 36px/1 Segoe UI, sans-serif;
  border: 1px solid rgba(0, 0, 0, 1);
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export default Header;