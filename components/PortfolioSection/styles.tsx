import styled from "styled-components";
import { Section } from "../../styles/styles";

export const PortfolioWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 136px;
  background-color: var(--color-lightgreen);
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 56px;
  }
`;
