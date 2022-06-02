import React from "react";
import HeaderContainer from "../containers/header.js";
import FooterContainer from "../containers/footer.js";
import SignInContainer from "../containers/signin.js";

export default function SignIn() {
  return (
    <>
      <HeaderContainer>
        <SignInContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
