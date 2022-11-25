import styled from "styled-components";
const navbarTransitions = "all 0.2s ease-in-out";
import ScreenSizes from "../../../utils/mediaVariables";

export const NavWrapper = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${(props: any) =>
    props.color ? `var(--color-${props.color})` : "white"};
  transition: ${navbarTransitions};
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  @media (min-width: ${ScreenSizes.tablet}) {
    padding: 0px;
    padding-top: 32px;
    padding-bottom: 32px;
    max-width: 715px;
    margin: 0 auto;
  }

  @media (min-width: ${ScreenSizes.laptop}) {
    padding: 0px;
    padding-top: 32px;
    padding-bottom: 32px;
    max-width: 815px;
    margin: 0 auto;
  }

  @media (min-width: ${ScreenSizes.desktop}) {
    padding-left: 68px;
    padding-right: 68px;
    max-width: 1286px;
  }
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
  pointer-events: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true ? "all" : "none"};
  opacity: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true ? 1 : 0};

  @media (min-width: ${ScreenSizes.tablet}) {
    display: none;
  }
`;

export const MobileMenuLinksWrapper = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 172px;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 48px;
  }
`;

export const ThankYouText = styled.p<MobileMenuProps>`
  @keyframes fadeMoveUpAnimation {
    from {
      opacity: 0;
      transform: translateY(16px) translateX(0);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  position: fixed;
  bottom: 56px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: var(--color-purple);
  opacity: 1;
  animation-name: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true ? "fadeMoveUpAnimation" : "unset"};
  animation-duration: 500ms;
  animation-delay: 500ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`;

interface MobileMenuLinkProps {
  $order: number;
  $isMobileMenuOpen: boolean;
}

export const MobileMenuLink = styled.a<MobileMenuLinkProps>`
  @keyframes fadeMoveDownAnimation {
    from {
      opacity: 0;
      transform: translateY(-16px) translateX(0);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  font-size: 32px;
  font-weight: 600;
  font-family: var(--font-lora);
  color: var(--color-purple);
  animation-name: ${(props: MobileMenuProps) =>
    props.$isMobileMenuOpen === true ? "fadeMoveDownAnimation" : "unset"};
  animation-duration: 350ms;
  animation-delay: ${(props: MobileMenuLinkProps) =>
    `calc(${props.$order} * 100ms)`};
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
`;

type TitleProps = {
  $isMobileMenuOpen: boolean;
};

export const Title = styled.a<TitleProps>`
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

  @media (min-width: ${ScreenSizes.tablet}) {
    color: var(--color-black100);
  }
`;

export const HamburgerWrapper = styled.div`
  @media (min-width: ${ScreenSizes.tablet}) {
    display: none;
  }
`;

export const StandardMenuLink = styled.a`
  display: none;
  font-weight: 400;
  font-size: 20px;
  @media (min-width: ${ScreenSizes.tablet}) {
    display: block;
  }
`;

export const NavigationWrapper = styled.nav`
  @media (min-width: ${ScreenSizes.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Space Between Flex Items */
    > :not(:first-child) {
      margin-left: 48px;
    }
  }
`;
