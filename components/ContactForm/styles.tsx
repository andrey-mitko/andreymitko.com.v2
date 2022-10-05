import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: baseline;
  /* Space Between Flex Items */
  > :not(:first-child) {
    margin-top: 32px;
  }
`;

interface FormFieldProps {
  $isError: boolean;
}

export const FormFieldWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const FormField = styled(Field)<FormFieldProps>`
  width: 100%;
  font-size: 16px;
  padding-bottom: 23px;
  border-bottom: 1px solid
    ${(props: FormFieldProps) =>
      props.$isError ? "var(--color-red)" : "var(--color-black100)"};

  ::placeholder {
    color: ${(props: FormFieldProps) =>
      props.$isError ? "var(--color-red)" : "var(--color-black70)"};
  }
`;

export const StyledWarning = styled.i`
  color: var(--color-red);
  position: absolute;
  right: 0;
  top: 1px;
  font-size: 20px;
`;

interface SubmitButtonProps {
  $isSending: boolean;
  $isSubmitted: boolean;
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  width: 100%;
  height: 56px;
  background-color: ${(props: SubmitButtonProps) =>
    props.$isSending || props.$isSubmitted
      ? "var(--color-black20)"
      : "var(--color-black100)"};
  color: ${(props: SubmitButtonProps) =>
    props.$isSending || props.$isSubmitted
      ? "var(--color-black100)"
      : "var(--color-white)"};
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
`;
