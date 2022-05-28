import React from "react";
import { Container, Story } from "./styles.js";

export default function Footer({ children, ...extraProps }) {
  return (
    <Footer direction={direction} {...extraProps}>
      {children}
    </Footer>
  );
}
