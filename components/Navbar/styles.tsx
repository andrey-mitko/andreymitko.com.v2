import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 24px;
  margin-top: 40px;
`;

export const Title = styled.h1`
  color: var(--color-black100);
  font-weight: 500;
  font-family: var(--font-lato);
  font-size: 20px;
  cursor: pointer;
`;

export const MobileMenu = styled.nav`
  .hamburger-react div {
    height: 2.5px !important;
  }
`;
