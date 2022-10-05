import styled from "styled-components";
import { Form } from "formik";

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

export const FormField = styled.input<FormFieldProps>`
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

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: var(--color-black100);
  color: var(--color-white);
  font-size: 20px;
  font-weight: 400;
  border-radius: 8px;
`;
