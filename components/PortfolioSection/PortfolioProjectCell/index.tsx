import React from "react";
import { PortfolioProject } from "../../../utils/types";
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

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const PortfolioProjectCell = (props: Props) => {
  return (
    <CellWrapper onClick={() => openLink(props.project.url)}>
      <StyledImage
        placeholder="blur"
        src={props.project.image}
        alt={props.project.title}
        layout="responsive"
        width={100}
        height={100}
      />
      <ContentWrapper>
        <TitleText>{props.project.title}</TitleText>
        {/* Might be added Later if neccesary */}
        {/* <SubtitleText>{props.project.subtitle}</SubtitleText> */}
        <LinkWrapper>
          <StyledLink
            onClick={(e) => {
              e.stopPropagation();
            }}
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
};

export default PortfolioProjectCell;
