import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";
import BrowseContainer from "../containers/browse.js";
import FooterContainer from "../containers/footer.js";
import * as ROUTES from "../routes/route.js";

export default function BrowsePage() {
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo>
            <Link to={ROUTES.HOME}>notflix</Link>
          </Header.Logo>
        </Header.Frame>
      </Header>
      <BrowseContainer />
      <FooterContainer />
    </>
  );
}
