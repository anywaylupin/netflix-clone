import React, { useState, useContext, createContext } from "react";
import { Container, Title, List, Item, Question, Answer } from "../styles/faqs.js";

const ToggleContext = createContext();

export default function Faqs({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}

Faqs.Title = function FaqsTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};

Faqs.List = function FaqsList({ children, ...extraProps }) {
  return <List {...extraProps}>{children}</List>;
};

Faqs.Item = function FaqsItem({ children, ...extraProps }) {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...extraProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Faqs.Question = function FaqsQuestion({ children, ...extraProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Question
      onClick={() => setToggleShow((toggleShow) => !toggleShow)} // if clicked, set to false, vice versa
      {...extraProps}
    >
      {children}
    </Question>
  );
};

Faqs.Answer = function FaqsAnswer({ children, ...extraProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Answer {...extraProps}>{children}</Answer> : null;
};
