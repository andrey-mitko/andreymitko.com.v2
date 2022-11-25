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

const InputComponent = ({ label, isTextArea, rows, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormFieldWrapper>
        <FormField
          component={isTextArea ? "textarea" : "input"}
          $isError={meta.touched && meta.error !== undefined}
          type="text"
          placeholder={props.placeholder}
          rows={isTextArea ? 5 : 1}
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
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isFormSending, setIsFormSending] = React.useState(false);

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
  const handleSuccess = (
    { name, email, message }: FormValues,
    { resetForm }: any
  ) => {
    setIsFormSending(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://getform.io/f/b4cc1525-c0cc-4e8a-a63a-9986e2acaf6e", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setIsFormSubmitted(true);
        resetForm();
      })
      .catch((error) => setIsFormSubmitted(false));
    console.log(name, email, message);
  };

  React.useEffect(() => {
    setIsFormSending(false);
  }, [isFormSubmitted]);

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
            isTextArea={true}
            name="message"
            label="Message"
            type="text"
            placeholder="Message"
            autoComplete="off"
          />

          <SubmitButton
            $isSubmitted={isFormSubmitted}
            $isSending={isFormSending}
            type="submit"
            disabled={isFormSubmitted || isFormSending}
          >
            {isFormSending
              ? "Sending..."
              : isFormSubmitted
              ? "Thank you!"
              : "Contact"}
          </SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ContactForm;
