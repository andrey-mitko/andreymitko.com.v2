import React from "react";
import { PortfolioProject } from "../../../types";
import {
  CellWrapper,
  ContentWrapper,
  TitleText,
  SubtitleText,
  LinkWrapper,
  StyledImage,
} from "./styles";
import StyledLink from "../../StyledLink";

type Props = {
  project: PortfolioProject;
};

const PortfolioProjectCell = (props: Props) => {
  return (
    <CellWrapper>
      <StyledImage
        src={props.project.image}
        alt={props.project.title}
        layout="responsive"
        width={100}
        height={100}
      />
      <ContentWrapper>
        <TitleText>{props.project.title}</TitleText>
        <SubtitleText>{props.project.subtitle}</SubtitleText>
        <LinkWrapper>
          <StyledLink
            href={props.project.url}
            title={
              props.project.url.includes("apps.apple.com")
                ? "VISIT APPSTORE"
                : "VISIT WEBSITE"
            }
          />
        </LinkWrapper>
      </ContentWrapper>
    </CellWrapper>
  );

  // CellWrapper
  // Image
  // ContentWrapper
  // TitleText
  // SubtitleText
  // LinkWrapper
};

export default PortfolioProjectCell;
