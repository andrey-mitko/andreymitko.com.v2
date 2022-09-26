import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 24px;
`;

export const Title = styled.h1`
  color: var(--color-black100);
  font-weight: 500;
  font-family: var(--font-lato);
  font-size: 20px;
  cursor: pointer;
`;
