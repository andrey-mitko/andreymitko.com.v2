import React from "react";
import Image from "next/image";
import Project from "@/types/Project";
import StyledLink from "@/components/StyledLink";
import {
  CellWrapper,
  ContentWrapper,
  TitleText,
  ImageWrapper,
  LinkWrapper,
} from "./styles";

type Props = {
  project: Project;
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
          draggable={false}
          placeholder="blur"
          src={props.project.image}
          alt={props.project.title}
          width={100}
          height={100}
          className="image"
          sizes="100vw"
        />
      </ImageWrapper>

      <ContentWrapper>
        <TitleText>{props.project.title}</TitleText>

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
