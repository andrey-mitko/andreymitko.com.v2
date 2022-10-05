import styled from "styled-components";
import { Section } from "../../styles/styles";

export const FooterWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 69px;
  background-color: var(--color-white);
`;

export const ContactFromWrapper = styled.div`
  margin-top: 54px;
`;

export const FooterTitle = styled.h2`
  font-family: var(--font-lora);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
`;

export const SocialMediaWrapper = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

interface SocialMediaProps {
  $fillColor: string;
}

export const SocialMediaIcon = styled.i<SocialMediaProps>`
  font-size: 40px;
  color: ${(props: SocialMediaProps) => `var(--color-${props.$fillColor})`};
`;
