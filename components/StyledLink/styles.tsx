import { styled } from "@/stitches.config";

export const Link = styled("a", {
  fontWeight: "$medium",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",

  "@hover": {
    "@laptop": {
      color: "$black70",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: "$black100",
      },
    },
  },
});

export const StyledArrowRight = styled("i", {
  fontSize: "16px",
  marginLeft: "4px",
});
