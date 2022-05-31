import React from "react";
import {
  Container,
  Frame,
  Logo,
  AuthLink,
  Text,
  Title,
  SubTitle,
} from "../styles/header.js";

export default function Header({ background = true, children, ...extraProps }) {
  return background ? (
    <Container {...extraProps}>{children}</Container>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...extraProps }) {
  return <Frame {...extraProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, ...extraProps }) {
  return <Logo {...extraProps}>{children}</Logo>;
};

Header.AuthLink = function HeaderSignBtn({ children, ...extraProps }) {
  return <AuthLink {...extraProps}>{children}</AuthLink>;
};

Header.Text = function HeaderText({ children, ...extraProps }) {
  return <Text {...extraProps}>{children}</Text>;
};

Header.Title = function HeaderTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...extraProps }) {
  return <SubTitle {...extraProps}>{children}</SubTitle>;
};
