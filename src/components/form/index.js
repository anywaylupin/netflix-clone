import React from "react";
import { Container, Title, Field, Input, Button } from "../styles/form.js";

export default function Form({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}
Form.Title = function FormTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};
Form.Field = function FormField({ children, ...extraProps }) {
  return <Field {...extraProps}>{children}</Field>;
};
Form.Input = function FormInput({ ...extraProps }) {
  return <Input {...extraProps} />;
};
Form.Button = function FormButton({ children, ...extraProps }) {
  return (
    <Button {...extraProps}>
      {children} <i class="fa fa-chevron-right" />
    </Button>
  );
};
