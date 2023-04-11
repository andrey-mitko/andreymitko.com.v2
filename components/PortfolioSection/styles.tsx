import { styled, Section, SectionTitle } from "@/stitches.config";

export const PortfolioWrapper = styled(Section, {
  paddingTop: "112px",
  paddingBottom: "60px",
  backgroundColor: "$lightgreen",

  "@desktop": {
    paddingY: "140px",
  },
});

export const StyledSectionTitle = styled(SectionTitle, {
  "&::after": {
    backgroundColor: "$green",
  },

  "@tablet": {
    width: "100%",
    textAlign: "center",

    "&::after": {
      marginX: "auto",
      display: "block",
    },
  },
});

export const ContentWrapper = styled("div", {
  marginTop: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "baseline",
  rowGap: "64px",

  "@tablet": {
    width: "100%",
    marginTop: "56px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "76px",
  },

  "@desktop": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
