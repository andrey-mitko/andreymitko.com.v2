import styled from "styled-components";
import { Section } from "@/stitches.config";
import ScreenSizes from "../../../utils/mediaVariables";

export const FooterWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 69px;
  background-color: var(--color-white);

  @media (min-width: ${ScreenSizes.tablet}) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 36px;
      grid-template-areas:
        "title contact"
        "socials contact"
        ". contact"
        "footer contact";
    }
  }

  @media (min-width: ${ScreenSizes.laptop}) {
    .container {
      gap: 0 40px;
    }

    padding-top: 120px;
    padding-bottom: 112px;
  }
`;

export const ContactFromWrapper = styled.div`
  grid-area: contact;
  margin-top: 54px;

  @media (min-width: ${ScreenSizes.tablet}) {
    margin-top: 0px;
  }
`;

export const FooterTitle = styled.h2`
  grid-area: title;
  font-family: var(--font-lora);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;

  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 36px;
  }

  @media (min-width: ${ScreenSizes.desktop}) {
    font-size: 40px;
  }
`;

interface SocialMediaWrapperProps {
  $isLinkHover: boolean;
}

export const SocialMediaWrapper = styled.div<SocialMediaWrapperProps>`
  grid-area: socials;
  margin-top: 82px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  @media (min-width: ${ScreenSizes.tablet}) {
    margin-top: 24px;
    width: fit-content;

    > * {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 8px;
      @media (hover: hover) {
        opacity: ${(props: SocialMediaWrapperProps) =>
          props.$isLinkHover ? "0.5" : "1"};
        transition: all 0.25s ease-in-out;
        :hover {
          opacity: 1;
        }
      }
    }
    > :not(:first-child) {
      margin-left: 12px;
      padding-left: 8px;
    }
  }
`;

interface SocialMediaProps {
  $fillColor: string;
}

export const SocialMediaIcon = styled.i<SocialMediaProps>`
  font-size: 40px;
  color: ${(props: SocialMediaProps) => `var(--color-${props.$fillColor})`};

  @media (min-width: ${ScreenSizes.tablet}) {
    font-size: 36px;
  }
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  width: 100%;
  margin-top: 60px;
  text-align: center;
  color: var(--color-black70);
  @media (min-width: ${ScreenSizes.tablet}) {
    text-align: left;
  }
`;

export const FooterBr = styled.br`
  @media (min-width: ${ScreenSizes.tablet}) {
    display: none;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  line-height: 2;
`;
