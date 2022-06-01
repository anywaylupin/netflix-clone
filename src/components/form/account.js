import React from "react";
import {
  Container,
  Title,
  Error,
  Form,
  Input,
  Submit,
  Other,
  Text,
  TermsOfUse,
} from "../styles/account.js";

export default function Account({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}
Account.Error = function AccountError({ children, ...extraProps }) {
  return <Error {...extraProps}>{children}</Error>;
};
Account.Title = function AccountTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};
Account.Form = function AccountForm({ children, ...extraProps }) {
  return <Form {...extraProps}>{children}</Form>;
};
Account.Input = function AccountInput({ children, ...extraProps }) {
  return <Input {...extraProps}>{children}</Input>;
};
Account.Submit = function AccountSubmit({ children, ...extraProps }) {
  return <Submit {...extraProps}>{children}</Submit>;
};
Account.Other = function AccountOther({ children, ...extraProps }) {
  return <Other {...extraProps}>{children}</Other>;
};
Account.Text = function AccountText({ children, ...extraProps }) {
  return <Text {...extraProps}>{children}</Text>;
};
Account.TermsOfUse = function AccountTermsOfUse({ children, ...extraProps }) {
  return <TermsOfUse {...extraProps}>{children}</TermsOfUse>;
};