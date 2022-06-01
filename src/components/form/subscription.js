import React from "react";
import { Container, Title, Field, Input, Button } from "../styles/subscription.js";

export default function Subscription({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}
Subscription.Title = function SubscriptionTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};
Subscription.Field = function SubscriptionField({ children, ...extraProps }) {
  return <Field {...extraProps}>{children}</Field>;
};
Subscription.Input = function SubscriptionInput({ ...extraProps }) {
  return <Input {...extraProps} />;
};
Subscription.Button = function SubscriptionButton({ children, ...extraProps }) {
  return (
    <Button {...extraProps}>
      {children} <i className="fa fa-chevron-right" />
    </Button>
  );
};
