import { styled, Section } from "@/stitches.config";

export const ExperienceWrapper = styled(Section, {
  paddingTop: "112px",
  paddingBottom: "136px",
  backgroundColor: "$lightpink",

  "@desktop": {
    height: "92vh",
    paddingY: "0px",
  },
});

export const ContentContainer = styled("div", {
  "@desktop": {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export const ExperiencesList = styled("div", {
  marginTop: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "baseline",
  rowGap: "40px",

  "@tablet": {
    marginTop: "56px",
  },

  "@desktop": {
    marginTop: "0px",
    flexGrow: 1,
    marginLeft: "112px",
  },
});

export const MoreInfoWrapper = styled("div", {
  lineHeight: "1.2",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "8px",
});

export const OpenToWorkText = styled("h5", {
  color: "$black70",
  fontSize: "16px",
});
