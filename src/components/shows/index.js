import React from "react";
import { Container, NavBar, Item, Cover, Title, Info, Genre, Year, Empty } from "../styles/shows.js";

export default function Shows({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}

Shows.NavBar = function ShowsNavBar({ children, ...extraProps }) {
  return <NavBar {...extraProps}>{children}</NavBar>;
};

Shows.Item = function ShowsItem({ children, ...extraProps }) {
  return <Item {...extraProps}>{children}</Item>;
};

Shows.Cover = function ShowsCover({ children, ...extraProps }) {
  return <Cover {...extraProps}>{children}</Cover>;
};

Shows.Info = function ShowsInfo({ children, ...extraProps }) {
  return <Info {...extraProps}>{children}</Info>;
};

Shows.Title = function ShowsTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};

Shows.Genre = function ShowsGenre({ children, ...extraProps }) {
  return <Genre {...extraProps}>{children}</Genre>;
};

Shows.Year = function ShowsYear({ children, ...extraProps }) {
  return <Year {...extraProps}>{children}</Year>;
};
Shows.Empty = function ShowsEmpty({ children, ...extraProps }) {
  return <Empty {...extraProps}>{children}</Empty>;
};
