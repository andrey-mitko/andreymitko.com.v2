import { styled, Section, keyframes } from "@/stitches.config";

export const HeroWrapper = styled(Section, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const sharedTextStyles = {
  fontFamily: "$lora",
  fontSize: "36px",
  fontWeight: "$semibold",
  lineHeight: "1.25",

  "@tablet": {
    fontSize: "48px",
  },

  "@desktop": {
    fontSize: "56px",
  },
};

export const HeroText = styled("h1", {
  ...sharedTextStyles,
  "@tablet": {
    ...sharedTextStyles["@tablet"],
    width: "617px",
  },

  "@desktop": {
    ...sharedTextStyles["@desktop"],
    width: "1073px",
    textAlign: "center",
  },
});

export const ColouredText = styled("span", {
  ...sharedTextStyles,
  variants: {
    type: {
      blue: {
        color: "$blue",
      },
      pink: {
        color: "$pink",
      },
      green: {
        color: "$green",
      },
      orange: {
        color: "$orange",
      },
    },
  },
});

const fadeMoveAnimation = keyframes({
  "0%": { opacity: 0, transform: "translateY(0) translateX(-50%)" },
  "100%": { opacity: 1, transform: "translateY(-0.75em) translateX(-50%)" },
});

export const StyledArrowUp = styled("i", {
  position: "absolute",
  bottom: "40px",
  left: "50%",
  transform: "translateX(-50%)",
  opacity: 0,
  fontSize: "32px",
  color: "$black50",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  animationName: `${fadeMoveAnimation}`,
  animationDuration: "2.5s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationDelay: "1s",
  animationFillMode: "both",

  "@desktop": {
    bottom: "56px",
    fontSize: "36px",
  },
});
