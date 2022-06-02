import React from "react";
import { Container, Header, Logo, Content, Title, Text, AuthLink } from "../styles/notfound.js";

export default function NotFound({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}
NotFound.Header = function NotFoundHeader({ children, ...extraProps }) {
  return <Header {...extraProps}>{children}</Header>;
}
NotFound.Logo = function NotFoundLogo({ children, ...extraProps }) {
  return <Logo {...extraProps}>{children}</Logo>;
}
NotFound.Content = function NotFoundContent({ children, ...extraProps }) {
  return <Content {...extraProps}>{children}</Content>;
}
NotFound.Title = function NotFoundTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
}
NotFound.Text = function NotFoundText({ children, ...extraProps }) {
  return <Text {...extraProps}>{children}</Text>;
}
NotFound.AuthLink = function NotFoundAuthLink({ children, ...extraProps }) {
  return <AuthLink {...extraProps}>{children}</AuthLink>;
}
