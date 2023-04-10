import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Input from "./Input";
import { StyledForm, SubmitButton } from "./styles";

const ContactForm = () => {
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
          <Input
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
            autoComplete="off"
          />
          <Input
            name="email"
            label="Email"
            type="text"
            placeholder="Email"
            autoComplete="off"
          />
          <Input
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
