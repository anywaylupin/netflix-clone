import React from "react";
import { NotFound } from "../components";
import { Link } from "react-router-dom";
import * as ROUTES from "../routes/route.js";

export default function NotFoundPage() {
  return (
    <>
      <NotFound>
        <NotFound.Header>
          <NotFound.Logo><Link to={ROUTES.HOME}>notflix</Link></NotFound.Logo>
        </NotFound.Header>
        <NotFound.Content>
          <NotFound.Title>Lost your way?</NotFound.Title>
          <NotFound.Text>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </NotFound.Text>
          <NotFound.AuthLink><Link to={ROUTES.HOME}>Notflix Home</Link></NotFound.AuthLink>
        </NotFound.Content>
      </NotFound>
    </>
  );
}
