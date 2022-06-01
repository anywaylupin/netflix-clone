import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import * as ROUTES from "../routes/route.js";

export default function HeaderContainer({children}) {
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
      {children}
    </Header>
  );
}