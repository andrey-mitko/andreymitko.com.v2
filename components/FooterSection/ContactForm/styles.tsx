import { Form } from "formik";
import { styled } from "@/stitches.config";

export const StyledForm = styled(Form, {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "baseline",
  rowGap: "32px",
});

export const SubmitButton = styled("button", {
  width: "100%",
  height: "56px",
  backgroundColor: "$black100",
  color: "$white",
  fontSize: "18px",
  fontWeight: "$regular",
  borderRadius: "8px",
  cursor: "pointer",
  textAlign: "center",

  variants: {
    sendingOrSubmitted: {
      true: {
        backgroundColor: "$black20",
        color: "$black100",
        cursor: "default",
      },
    },
  },
});
