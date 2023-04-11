import { styled, Section } from "@/stitches.config";

export const AboutWrapper = styled(Section, {
  position: "relative",
  paddingTop: "112px",
  paddingBottom: "136px",
  backgroundColor: "$lightblue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@desktop": {
    height: "92vh",
    paddingY: "0px",
    display: "block",
  },
});

export const ContentContainer = styled("div", {
  "@desktop": {
    position: "relative",
    top: "50%",

    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export const FeatureText = styled("h3", {
  fontWeight: "$medium",
  lineHeight: "1.5",
  color: "$black100",

  "@tablet": {
    width: "fit-content",
  },
});

export const AboutText = styled("p", {
  marginTop: "52px",
  fontWeight: "$regular",
  lineHeight: "1.5",
  color: "$black100",

  "@tablet": {
    marginTop: "0px",
    maxWidth: "400px",
    marginLeft: "0px",
  },

  "@desktop": {
    marginLeft: "130px",
  },
});

export const FeaturesWrapper = styled("div", {
  marginTop: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  rowGap: "28px",

  "@tablet": {
    minWidth: "165px",
    height: "100%",
    marginLeft: "120px",
    marginTop: "0px",
  },

  "@desktop": {
    marginLeft: "212px",
    marginTop: "0px",
  },
});

export const ContentWrapper = styled("div", {
  "@tablet": {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginTop: "56px",
  },

  "@desktop": {
    marginTop: "0px",
    flexDirection: "row",
  },
});
