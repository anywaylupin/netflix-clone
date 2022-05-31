import React from "react";
import {
  Container,
  Divider,
  Card,
  Content,
  Title,
  Text,
  Image,
} from "../styles/story.js";

export default function Story({ children, direction = "row", ...extraProps }) {
  return (
    <Divider {...extraProps}>
      <Card direction={direction}>{children}</Card>
    </Divider>
  );
}

Story.Container = function StoryContainer({ children, ...extraProps }) {
  return <Container {...extraProps}>{children}</Container>;
};

Story.Content = function StoryContent({ children, ...extraProps }) {
  return <Content {...extraProps}>{children}</Content>;
};

Story.Title = function StoryTitle({ children, ...extraProps }) {
  return <Title {...extraProps}>{children}</Title>;
};

Story.Text = function StoryText({ children, ...extraProps }) {
  return <Text {...extraProps}>{children}</Text>;
};

Story.Image = function StoryImage({ ...extraProps }) {
  return <Image {...extraProps} />;
};
