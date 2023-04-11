import { styled, Section } from "@/stitches.config";

export const FooterWrapper = styled(Section, {
  paddingTop: "112px",
  paddingBottom: "69px",
  backgroundColor: "$white",

  "@tablet": {
    "& .container": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 36px",
      gridTemplateAreas: `
        "title contact"
        "socials contact"
        ". contact"
        "footer contact"
      `,
    },
  },

  "@laptop": {
    "& .container": {
      gap: "0 40px",
    },

    paddingTop: "120px",
    paddingBottom: "112px",
  },
});

export const ContactFromWrapper = styled("div", {
  gridArea: "contact",
  marginTop: "54px",

  "@tablet": {
    marginTop: "0px",
  },
});

export const FooterTitle = styled("h2", {
  gridArea: "title",
  fontFamily: "$lora",
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.2",

  "@tablet": {
    fontSize: "36px",
  },

  "@laptop": {
    fontSize: "40px",
  },
});

export const SocialMediaWrapper = styled("div", {
  gridArea: "socials",
  marginTop: "82px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "baseline",
  columnGap: "12px",

  "& > :not(:first-child)": {
    paddingLeft: "8px",
  },

  "@tablet": {
    marginTop: "24px",
    width: "fit-content",

    "& > *": {
      paddingY: "8px",
      paddingRight: "8px",
      "@hover": {
        opacity: "1",
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          opacity: "1",
        },
      },
    },
  },

  variants: {
    linkHovered: {
      true: {
        "@tablet": {
          "> *": {
            "@hover": {
              opacity: "0.5",
            },
          },
        },
      },
    },
  },
});

export const SocialMediaIcon = styled("i", {
  fontSize: "40px",
  color: "$black70",

  "@tablet": {
    fontSize: "36px",
  },
});

export const StyledFooter = styled("footer", {
  gridArea: "footer",
  width: "100%",
  marginTop: "60px",
  color: "$black70",
});

export const FooterBr = styled("br", {
  "@tablet": {
    display: "none",
  },
});

export const FooterText = styled("p", {
  fontSize: "14px",
  lineHeight: "2",

  textAlign: "center",
  "@tablet": {
    textAlign: "left",
  },
});
