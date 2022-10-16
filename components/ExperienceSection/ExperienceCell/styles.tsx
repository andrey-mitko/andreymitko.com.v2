import styled from "styled-components";
import ScreenSizes from "../../../utils/mediaVariables";

export const CellWrapper = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 16px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    flex-direction: row;
    align-items: center;
    > :not(:first-child) {
      margin-top: 0px;
    }
  }
`;

export const CompanyPeriodWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 16px;
  }

  @media (min-width: ${ScreenSizes.tablet}) {
    flex-direction: row;
    width: 63%;
    > :not(:first-child) {
      margin-top: 0px;
    }
  }
`;

export const TitleText = styled.h4`
  font-weight: 600;
  line-height: 1.2;
  font-size: 20px;
`;

export const CompanyText = styled.p`
  line-height: 1.2;
  font-size: 16px;
`;

export const PeriodText = styled.p`
  line-height: 1.2;
  font-size: 16px;
`;

export const Divider = styled.div`
  margin-top: 40px;
  height: 1px;
  width: 100%;
  background-color: var(--color-black70);
`;
