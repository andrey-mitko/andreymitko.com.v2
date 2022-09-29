import styled from "styled-components";
import { Section } from "../../styles/styles";

export const ExperienceWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 136px;
  background-color: var(--color-lightpink);
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 32px;
  }
`;

export const MoreInfoWrapper = styled.div`
  line-height: 1.2;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

export const StyledLink = styled.a`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

export const StyledArrowRight = styled.i`
  font-size: 16px;
  margin-left: 4px;
`;

export const OpenToWorkText = styled.h6`
  color: var(--color-black70);
`;
