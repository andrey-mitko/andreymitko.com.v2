import { styled } from "@/stitches.config";

export const CellWrapper = styled("div", {
  width: "100%",
});

export const ContentWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  rowGap: "16px",

  "@tablet": {
    flexDirection: "row",
    alignItems: "center",
    rowGap: "0px",
  },
});

export const CompanyPeriodWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  rowGap: "16px",

  "@tablet": {
    flexDirection: "row",
    width: "63%",
    rowGap: "0px",
  },
});

export const TitleText = styled("h4", {
  fontWeight: "$medium",
  lineHeight: "1.2",
});

export const CompanyText = styled("p", {
  lineHeight: "1.2",
  fontSize: "16px",
});

export const PeriodText = styled("p", {
  lineHeight: "1.2",
  fontSize: "16px",
});

export const Divider = styled("div", {
  height: "1px",
  width: "100%",
  backgroundColor: "$black70",
  marginTop: "40px",
});

