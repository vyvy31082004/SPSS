import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

// Header Component
function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <HeaderContent>
            <LogoWrapper>
              <img
                src={logo}
                alt="HCMUT Logo"
                style={{ width: "80px", height: "80px" }}
              />
            </LogoWrapper>
            <TitleWrapper>
              <BrandText>HCMUT - SMART PRINTING SERVICE</BrandText>
            </TitleWrapper>
          </HeaderContent>
        </Link>
      </Container>
    </HeaderWrapper>
  );
}

// Styled-components
const HeaderWrapper = styled.header`
  background-color: white;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0; /* Prevent logo from shrinking */
  display: flex;
  align-items: center;

  img {
    display: block;
  }
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const BrandText = styled.h2`
  color: rgba(0, 0, 0, 0.9);
  font: 700 24px "Segoe UI", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust for smaller screens */
  }
`;

export default Header;
