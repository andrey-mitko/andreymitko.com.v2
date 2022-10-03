import styled from "styled-components";

const navbarTransitions = "all 0.2s ease-in-out";

export const NavWrapper = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props: any) =>
    props.color ? `var(--color-${props.color})` : "white"};
  padding: 24px;
  transition: ${navbarTransitions};
`;

type MobileMenuProps = {
  $isMobileMenuOpen: boolean;
};

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: var(--color-lightpurple);
  transition: ${navbarTransitions};
  pointer-events: none;
  opacity: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true ? 1 : 0};
`;

type TitleProps = {
  $isMobileMenuOpen: boolean;
};

export const Title = styled.h1<TitleProps>`
  z-index: 3;
  color: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true
      ? "var(--color-purple)"
      : "var(--color-black100)"};
  font-weight: 500;
  font-family: var(--font-lato);
  font-size: 20px;
  cursor: pointer;
  transition: ${navbarTransitions};
`;
