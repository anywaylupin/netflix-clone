import React from "react";
import HeaderContainer from "../containers/header.js";
import StoryContainer from "../containers/story.js";
import FaqsContainer from "../containers/faqs.js";
import FooterContainer from "../containers/footer.js";

export default function HomePage() {
  return (
    <>
      <HeaderContainer />
      <StoryContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
