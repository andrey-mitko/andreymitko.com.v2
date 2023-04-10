import styled from "styled-components";
import { Form } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: baseline;
  row-gap: 32px;
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
  cursor: pointer;
`;
