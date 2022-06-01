import React from "react";
import { Header, Subscription } from "../components";
import HeaderContainer from "../containers/header.js";
import StoryContainer from "../containers/story.js";
import FaqsContainer from "../containers/faqs.js";
import FooterContainer from "../containers/footer.js";

export default function HomePage() {
  return (
    <>
      <HeaderContainer>
        <Header.Text>
          <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
          <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
          <Subscription.Title>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Subscription.Title>
          <Subscription.Field>
            <Subscription.Input placeholder="Email address" />
            <Subscription.Button>Get Started </Subscription.Button>
          </Subscription.Field>
        </Header.Text>
      </HeaderContainer>
      <StoryContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
