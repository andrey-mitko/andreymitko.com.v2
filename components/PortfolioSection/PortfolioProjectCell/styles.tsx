import styled from "styled-components";
import ScreenSizes from "@/utils/mediaVariables";

export const CellWrapper = styled.div`
  width: 100%;
  cursor: pointer;

  @media (min-width: ${ScreenSizes.tablet}) {
    /* max-width: 298px; */
    width: unset;
    height: 100%;
  }
  @media (min-width: ${ScreenSizes.laptop}) and (hover: hover) {
    :hover {
      .image-wrapper {
        transform: scale(0.985);
        img {
          transform: scale(1.035);
        }
      }
      a {
        color: var(--color-black100);
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  transition: all 0.25s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
  img {
    transition: all 0.25s ease-in-out;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 24px;
`;

export const TitleText = styled.h4`
  line-height: 1.2;
  font-weight: 600;
  font-size: 20px;
`;

export const SubtitleText = styled.p`
  margin-top: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: var(--color-black100);
  font-size: 16px;
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;

  > * {
    width: fit-content;
  }
`;
