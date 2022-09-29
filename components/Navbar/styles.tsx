import styled from "styled-components";

export const NavWrapper = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) =>
    props.color ? `var(--color-${props.color})` : "red"};
  padding: 24px;
  transition: background-color 0.2s ease-in-out;
`;

export const Title = styled.h1`
  color: var(--color-black100);
  font-weight: 500;
  font-family: var(--font-lato);
  font-size: 20px;
  cursor: pointer;
`;
