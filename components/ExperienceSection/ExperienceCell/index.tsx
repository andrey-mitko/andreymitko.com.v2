import React from "react";
import { Experience } from "../../../types";
import {
  CellWrapper,
  ContentWrapper,
  TitleText,
  CompanyPeriodWrapper,
  CompanyText,
  PeriodText,
  Divider,
} from "./styles";

type Props = {
  experience: Experience;
};

const ExperienceCell = (props: Props) => {
  return (
    <CellWrapper>
      <ContentWrapper>
        <TitleText>{props.experience.title}</TitleText>

        <CompanyPeriodWrapper>
          <CompanyText>{props.experience.company}</CompanyText>
          <PeriodText>{props.experience.period}</PeriodText>
        </CompanyPeriodWrapper>
      </ContentWrapper>
      <Divider />
    </CellWrapper>
  );
};

export default ExperienceCell;
