import { Field } from "formik";
import { styled } from "@/stitches.config";

export const FormFieldWrapper = styled("div", {
  width: "100%",
  position: "relative",
});

export const FormField = styled(Field, {
  width: "100%",
  fontSize: "16px",
  paddingBottom: "23px",
  borderBottom: "1px solid $black100",

  "&::placeholder": {
    color: "$black70",
  },

  variants: {
    error: {
      true: {
        borderBottom: "1px solid $red",
        "&::placeholder": {
          color: "$red",
        },
      },
    },
  },
});

export const StyledWarning = styled("i", {
  color: "$red",
  position: "absolute",
  right: 0,
  top: "1px",
  fontSize: "20px",
});
