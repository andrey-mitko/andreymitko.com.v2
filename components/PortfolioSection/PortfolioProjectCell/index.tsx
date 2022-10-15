import React from "react";
import { PortfolioProject } from "../../../utils/types";
import {
  CellWrapper,
  ContentWrapper,
  TitleText,
  ImageWrapper,
  // SubtitleText,
  LinkWrapper,
} from "./styles";
import Image from "next/image";
import StyledLink from "../../StyledLink";

type Props = {
  project: PortfolioProject;
  className?: string;
};

const openLink = (url: string) => {
  window.open(url, "_blank");
};

const PortfolioProjectCell = (props: Props) => {
  return (
    <CellWrapper
      className={`${props.className}`}
      onClick={() => openLink(props.project.url)}
    >
      <ImageWrapper className="image-wrapper">
        <Image
          placeholder="blur"
          src={props.project.image}
          alt={props.project.title}
          layout="responsive"
          width={100}
          height={100}
          className="image"
        />
      </ImageWrapper>

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
