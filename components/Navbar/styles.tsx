import { keyframes, styled } from "@/stitches.config";

export const NavWrapper = styled("div", {
  zIndex: 3,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  transition: "all 0.2s ease-in-out",
});

export const NavContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",

  "@tablet": {
    padding: "0px",
    paddingTop: "32px",
    paddingBottom: "32px",
    maxWidth: "715px",
    margin: "0 auto",
  },

  "@laptop": {
    padding: "0px",
    paddingTop: "32px",
    paddingBottom: "32px",
    maxWidth: "815px",
    margin: "0 auto",
  },

  "@desktop": {
    paddingLeft: "68px",
    paddingRight: "68px",
    maxWidth: "1286px",
  },
});

export const MobileMenu = styled("div", {
  position: "fixed",
  zIndex: 2,
  width: "100%",
  height: "100%",
  backgroundColor: "$lightpurple",
  transition: "all 0.2s ease-in-out",

  variants: {
    mobileMenuOpen: {
      true: {
        pointerEvents: "all",
        opacity: 1,
      },
      false: {
        pointerEvents: "none",
        opacity: 0,
      },
    },
  },

  "@tablet": {
    display: "none",
  },
});

export const MobileMenuLinksWrapper = styled("div", {
  margin: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  justifyContent: "space-between",
  marginTop: "172px",
  rowGap: "48px",
});

const fadeMoveUpAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(16px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const fadeMoveDownAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(-16px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const MobileMenuLink = styled("a", {
  fontSize: "32px",
  fontWeight: 600,
  fontFamily: "$lora",
  color: "$purple",
  animationDuration: "350ms",
  animationFillMode: "both",
  animationTimingFunction: "ease-in-out",

  variants: {
    mobileMenuOpen: {
      true: {
        animationName: `${fadeMoveDownAnimation}`,
      },
      false: {
        animationName: "unset",
      },
    },
  },
});

export const Title = styled("a", {
  zIndex: 3,
  fontWeight: 500,
  fontFamily: "$lato",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  variants: {
    mobileMenuOpen: {
      true: {
        color: "$purple",
      },
      false: {
        color: "$black100",
      },
    },
  },

  "@tablet": {
    color: "$black100",
  },
});

export const HamburgerWrapper = styled("div", {
  "@tablet": {
    display: "none",
  },
});

export const StandardMenuLink = styled("a", {
  display: "none",
  fontWeight: 400,
  "@tablet": {
    display: "block",
  },
});

export const NavigationWrapper = styled("nav", {
  "@tablet": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "48px",
  },
});
