import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../firebase/context.js";
import { Account } from "../components/index.js";
import HeaderContainer from "../containers/header.js";
import FooterContainer from "../containers/footer.js";
import * as ROUTES from "../routes/route.js";

export default function SignIn() {
  const navigate = useNavigate();
  const { firebaseSignIn } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "";
  const handleSignIn = (event) => {
    event.preventDefault();

    //firebase Promise
    firebaseSignIn
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  //check form input

  return (
    <>
      <HeaderContainer>
        <Account>
          <Account.Title>Sign In</Account.Title>
          {error && <Account.Error>{error}</Account.Error>}

          <Account.Form onSubmit={handleSignIn} method="POST">
            <Account.Input
              placeholder="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Account.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Account.Submit disabled={isInvalid} type="submit">
              Sign In
            </Account.Submit>
          </Account.Form>
          <Account.Other>
            <Account.Text>
              New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now</Link>.
            </Account.Text>
            <Account.TermsOfUse>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
            </Account.TermsOfUse>
          </Account.Other>
        </Account>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
