import styled from "styled-components";

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
`;

export const CompanyPeriodWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 16px;
  }
`;

export const TitleText = styled.h5`
  font-weight: 600;
  line-height: 1.2;
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
  margin-top: 32px;
  height: 1px;
  width: 100%;
  background-color: var(--color-black70);
`;
