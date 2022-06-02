import React from "react";
import HeaderContainer from "../containers/header.js";
import FooterContainer from "../containers/footer.js";
import SignUpContainer from "../containers/signup.js";

export default function SignUp() {
  return (
    <>
      <HeaderContainer>
        <SignUpContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
