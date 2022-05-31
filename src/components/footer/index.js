import React from "react";
import { Container, Text } from "../styles/footer.js";

export default function Footer({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}

Footer.Text = function FooterTop({ children, ...extraProps }) {
  return <Text {...extraProps}>{children}</Text>;
};
