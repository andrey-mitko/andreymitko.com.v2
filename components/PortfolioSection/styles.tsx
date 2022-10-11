import styled from "styled-components";
import { Section } from "../../styles/styles";
import ScreenSizes from "../../utils/mediaVariables";
import { SectionTitle } from "../../styles/styles";

export const PortfolioWrapper = styled(Section)`
  padding-top: 112px;
  padding-bottom: 60px;
  background-color: var(--color-lightgreen);

  @media (min-width: ${ScreenSizes.desktop}) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
`;

export const StyledSectionTitle = styled(SectionTitle)`
  @media (min-width: ${ScreenSizes.tablet}) {
    width: 100%;
    text-align: center;

    ::after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 48px;
      height: 7px;
      border-radius: 3.5px;
      // ts-ignore
      background-color: ${(props: any) =>
        props.color ? `var(--color-${props.color})` : "var(--color-blue)"};
      margin-top: 16px;
    }
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 64px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    width: 100%;
    margin-top: 56px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 76px;
    > :not(:first-child) {
      margin-top: 0px;
    }
  }

  @media (min-width: ${ScreenSizes.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 76px;
    > :not(:first-child) {
      margin-top: 0px;
    }
  }
`;
