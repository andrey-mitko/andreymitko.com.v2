import React from "react";
import {
  StyledForm,
  FormField,
  FormFieldWrapper,
  SubmitButton,
  StyledWarning,
} from "./styles";
import * as Yup from "yup";
import { Formik, useField } from "formik";

type Props = {};

const InputComponent = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormFieldWrapper>
        <FormField
          $isError={meta.touched && meta.error !== undefined}
          type="text"
          placeholder={props.placeholder}
          {...field}
        />
        {meta.touched && meta.error && (
          <StyledWarning className="ri-error-warning-line" />
        )}
      </FormFieldWrapper>
    </>
  );
};

const ContactForm = (props: Props) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Required field"),
    email: Yup.string()
      .email("Must be a valid email address")
      .required("Required field"),
    message: Yup.string().required("Required field"),
  });

  interface FormValues {
    name: string;
    email: string;
    message: string;
  }
  const handleSuccess = ({ name, email, message }: FormValues) => {
    console.log(name, email, message);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => (
        <StyledForm>
          <InputComponent
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
          <InputComponent
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
          <InputComponent
            name="message"
            label="Message"
            type="text"
            placeholder="Message"
            autoComplete="off"
          />

          <SubmitButton type="submit">Contact</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
