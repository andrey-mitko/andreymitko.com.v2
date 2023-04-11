import React from "react";
import { useField } from "formik";
import { FormFieldWrapper, FormField, StyledWarning } from "./styles";

const Input = ({ label, isTextArea, rows, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <FormFieldWrapper>
      <FormField
        component={isTextArea ? "textarea" : "input"}
        error={meta.touched && meta.error !== undefined}
        type="text"
        placeholder={props.placeholder}
        rows={isTextArea ? 5 : 1}
        {...field}
      />
      {meta.touched && meta.error && (
        <StyledWarning className="ri-error-warning-line" />
      )}
    </FormFieldWrapper>
  );
};

export default Input;
