import React from "react";
import { Link } from "react-router-dom";
import { Header, Form } from "../components";
import * as ROUTES from "../routes/route.js";

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo>
          <Link to={ROUTES.HOME}>notflix</Link>
        </Header.Logo>
        <Header.AuthLink>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </Header.AuthLink>
      </Header.Frame>
      <Header.Text>
        <Header.Title>Unlimited movies, TV shows, and more.</Header.Title>
        <Header.SubTitle>Watch anywhere. Cancel anytime.</Header.SubTitle>
        <Form.Title>
          Ready to watch? Enter your email to create or restart your membership.
        </Form.Title>
        <Form.Field>
          <Form.Input placeholder="Email address" />
          <Form.Button>Get Started </Form.Button>
        </Form.Field>
      </Header.Text>
    </Header>
  );
}
