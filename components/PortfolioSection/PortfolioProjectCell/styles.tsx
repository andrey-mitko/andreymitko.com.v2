import { styled } from "@/stitches.config";

export const CellWrapper = styled("div", {
  width: "100%",
  cursor: "pointer",

  "@tablet": {
    width: "unset",
    height: "100%",
  },

  "@hover": {
    "@laptop": {
      "&:hover": {
        "& .image-wrapper": {
          transform: "scale(0.985)",
          "& img": {
            transform: "scale(1.035)",
          },
        },
        "& a": {
          color: "$black100",
        },
      },
    },
  },
});

export const ImageWrapper = styled("div", {
  transformOrigin: "center",
  transition: "all 0.25s ease-in-out",
  borderRadius: "16px",
  position: "relative",
  aspectRatio: "1/1",
  overflow: "hidden",

  "& img": {
    position: "absolute",
    height: "100%",
    width: "100%",
    transition: "all 0.25s ease-in-out",
  },

  "@tablet": {
    borderRadius: "12px",
  },

  "@laptop": {
    borderRadius: "8px",
  },
});

export const ContentWrapper = styled("div", {
  marginTop: "24px",
});

export const TitleText = styled("h4", {
  lineHeight: "1.2",
  fontWeight: "$semibold",
  fontSize: "20px",
});

export const LinkWrapper = styled("div", {
  marginTop: "20px",
  "& > *": {
    width: "fit-content",
  },
});
