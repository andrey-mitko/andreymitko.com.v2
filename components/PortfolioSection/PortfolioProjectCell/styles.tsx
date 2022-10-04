import styled from "styled-components";
import Image from "next/image";

export const CellWrapper = styled.div`
  width: 100%;
`;

export const StyledImage = styled(Image)`
  border-radius: 8px;
`;

export const ContentWrapper = styled.div`
  margin-top: 24px;
`;

export const TitleText = styled.h5`
  line-height: 1.2;
  font-weight: 600;
  font-size: 20px;
`;

export const SubtitleText = styled.p`
  margin-top: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: var(--color-black70);
  font-size: 20px;
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;

  > * {
    width: fit-content;
  }
`;