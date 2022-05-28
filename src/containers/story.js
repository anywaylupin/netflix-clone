import React from "react";
import { Story } from "../components";
import storyData from "../components/story/data/card.json";

export default function StoryContainer() {
  return (
    <Story.Container>
      {storyData.map((item) => (
        <Story key={item.id} direction={item.direction}>
          <Story.Content>
            <Story.Title>{item.title}</Story.Title>
            <Story.Text>{item.text}</Story.Text>
          </Story.Content>
          <Story.Content>
            <Story.Image src={item.image} />
          </Story.Content>
        </Story>
      ))}
    </Story.Container>
  );
}
