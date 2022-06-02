import React from "react";
import {
  Container,
  Cover,
  Info,
  Frame,
  Title,
  Rating,
  Time,
  Favorite,
  Description,
  Search,
} from "../styles/filmcard.js";

export default function FilmCard({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
}

FilmCard.Cover = function FilmCardCover({ children, ...extraProps }) {
  return <Cover {...extraProps}>{children}</Cover>;
};

FilmCard.Info = function FilmCardInfo({ children, ...extraProps }) {
  return <Info {...extraProps}>{children}</Info>;
};
FilmCard.Frame = function FilmCardFrame({ children, ...extraProps }) {
  return <Frame {...extraProps}>{children}</Frame>;
};
FilmCard.Title = function FilmCardTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};
FilmCard.Rating = function FilmCardRating({ children, ...extraProps }) {
  return <Rating {...extraProps}>{children}</Rating>;
};
FilmCard.Time = function FilmCardTime({ children, ...extraProps }) {
  return <Time {...extraProps}>{children}</Time>;
};
FilmCard.Favorite = function FilmCardFavorite({ children, ...extraProps }) {
  return (
    <Favorite {...extraProps}>
      {children}
      <i className="fa fa-heart" />
    </Favorite>
  );
};
FilmCard.Description = function FilmCardDescription({
  children,
  ...extraProps
}) {
  return <Description {...extraProps}>{children}</Description>;
};
FilmCard.Search = function FilmCardSearch({ children, ...extraProps }) {
  return (
    <Search {...extraProps}>
      <i className="fa fa-search" aria-hidden="true" />
    </Search>
  );
};
